// Telegram Bot Configuration
// Get these from @BotFather on Telegram
export const TELEGRAM_CONFIG = {
    // Bot token from @BotFather (format: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz)
    BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',

    // Chat IDs where messages should be sent (comma-separated for multiple)
    // Use @userinfobot to get your personal chat ID
    // Example: "123456789,987654321"
    CHAT_ID: process.env.TELEGRAM_CHAT_ID || '',
};

// Google reCAPTCHA v3 Configuration
export const RECAPTCHA_CONFIG = {
    // Site key (public, used in frontend)
    SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',

    // Secret key (private, used in API route)
    SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY || '',

    // Minimum score to accept (0.0 - 1.0, higher = more likely human)
    MIN_SCORE: 0.5,
};

interface TelegramMessage {
    name: string;
    email: string;
    phone?: string;
    message: string;
    product?: string;
}

export async function sendToTelegram(data: TelegramMessage): Promise<boolean> {
    const { BOT_TOKEN, CHAT_ID } = TELEGRAM_CONFIG;

    if (!BOT_TOKEN || !CHAT_ID) {
        console.error('Telegram credentials not configured');
        return false;
    }

    // Support multiple chat IDs (comma-separated)
    const chatIds = CHAT_ID.split(',').map(id => id.trim()).filter(Boolean);

    const text = `
🔔 *New Contact Form Submission*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${escapeMarkdown(data.name)}
📧 *Email:* ${escapeMarkdown(data.email)}
${data.phone ? `📱 *Phone:* ${escapeMarkdown(data.phone)}` : ''}
${data.product ? `📦 *Product:* ${escapeMarkdown(data.product)}` : ''}

💬 *Message:*
${escapeMarkdown(data.message)}

━━━━━━━━━━━━━━━━━━━━━━
⏰ ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
    `.trim();

    // Send to all chat IDs
    const results = await Promise.all(
        chatIds.map(async (chatId) => {
            try {
                const response = await fetch(
                    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text,
                            parse_mode: 'Markdown',
                        }),
                    }
                );

                const result = await response.json();
                return result.ok === true;
            } catch (error) {
                console.error(`Telegram send failed for chat ${chatId}:`, error);
                return false;
            }
        })
    );

    // Return true if at least one message was sent successfully
    return results.some(r => r === true);
}

function escapeMarkdown(text: string): string {
    return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}

export async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number }> {
    const { SECRET_KEY, MIN_SCORE } = RECAPTCHA_CONFIG;

    if (!SECRET_KEY) {
        console.error('reCAPTCHA secret key not configured');
        return { success: false };
    }

    try {
        const response = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    secret: SECRET_KEY,
                    response: token,
                }),
            }
        );

        const result = await response.json();

        return {
            success: result.success && result.score >= MIN_SCORE,
            score: result.score,
        };
    } catch (error) {
        console.error('reCAPTCHA verification failed:', error);
        return { success: false };
    }
}
