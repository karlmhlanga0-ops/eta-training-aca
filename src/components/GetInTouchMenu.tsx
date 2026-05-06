import React from 'react';
import { Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface GetInTouchMenuProps {
  fullWidth?: boolean;
}

const GetInTouchMenu: React.FC<GetInTouchMenuProps> = ({ fullWidth = false }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className={`inline-flex items-center gap-2 ${fullWidth ? 'w-full justify-center' : ''} bg-slate-100 text-slate-900 border border-[#3349df] hover:bg-slate-200 hover:text-[#3349df] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3349df]/50`}
        >
          <span>Get In Touch</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[220px] bg-white text-slate-900 border border-slate-200 shadow-xl">
        <DropdownMenuLabel className="text-sm font-semibold text-slate-600">Contact options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-slate-100">
          <a href="tel:+27761815155" className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#3349df]" />
            Call Us
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-slate-100">
          <a href="https://wa.me/27761815155" target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-[#3349df]" />
            WhatsApp
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GetInTouchMenu;
