"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
} from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col h-full items-end justify-end gap-4 py-8 md:py-10">
      <Dropdown placement="bottom">
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new">
            New file New file New file New file
          </DropdownItem>
          <DropdownItem key="copy">
            Copy link Copy link Copy link Copy link
          </DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
          <DropdownItem key="new2">New file</DropdownItem>
          <DropdownItem key="copy2">
            Copy link Copy link Copy link Copy link
          </DropdownItem>
          <DropdownItem key="edit2">Edit file</DropdownItem>
          <DropdownItem key="delete2" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Popover placement="right">
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover>
      <Tooltip content="I am a tooltip" placement="right">
        <Button>Hover me</Button>
      </Tooltip>
    </section>
  );
}
