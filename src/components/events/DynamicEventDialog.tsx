import dynamic from 'next/dynamic';
import { Event } from '@/utils/events';

interface DynamicEventDialogProps {
  event: Event;
  open: boolean;
  onClose: () => void;
}

const EventDialog = dynamic(() => import('./EventDialog'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

export default function DynamicEventDialog(props: DynamicEventDialogProps) {
  return <EventDialog {...props} />;
} 