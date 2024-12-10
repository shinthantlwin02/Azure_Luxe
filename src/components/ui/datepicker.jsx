import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Button from '../Button';

export function DatePicker({className, placeholderClassName}) {
  const [date, setDate] = React.useState();

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={`${className} flex gap-2 items-center justify-start text-left text-md font-semibold bg-transparent px-0`}
        >
          {date ? (
            format(date, 'PPP')
          ) : (
            <span className={`${placeholderClassName} text-md font-semibold`}>
              Pick a date
            </span>
          )}
          <CalendarIcon className='mr-2 h-4 w-4' color='#BDA16B'/>
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
