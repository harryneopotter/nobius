import { Metadata } from 'next';
import StandsClient from './StandsClient';

export const metadata: Metadata = {
    title: 'Stands | Nobius Audio',
    description: 'Engineered for acoustic control, designed for real living spaces. Custom speaker stands for optimal performance.',
};

export default function StandsPage() {
    return <StandsClient />;
}
