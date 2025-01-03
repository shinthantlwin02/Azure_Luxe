import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Trash2 } from 'lucide-react';

const DeleteModal = ({handleDelete}) => {
  return (
    <Dialog>
      <DialogTrigger><Trash2 color='red' /></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to delete this?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <div className={cn('flex items-center gap-4')}>
            <Button type="button" className={cn('bg-red-600 text-white')} onClick={handleDelete}>
              Delete
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
