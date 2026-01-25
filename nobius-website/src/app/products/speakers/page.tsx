import { Metadata } from 'next';
import SpeakersClient from './SpeakersClient';

export const metadata: Metadata = {
    title: 'Speakers | Nobius Audio',
    description: 'Timeless sound, Thoughtful design, Soulful performance. Explore our collection of handcrafted speakers.',
};

export default function SpeakersPage() {
    return <SpeakersClient />;
}
