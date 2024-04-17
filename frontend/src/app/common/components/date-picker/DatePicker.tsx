"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useClientFormStep } from "@/app/hooks/useClientFormStep"
import { addDateOfBirth } from "@/redux/features/agent-creation"

export function DatePicker({ name, register }: any) {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full mt-2 pl-12 h-[45px] rounded-xl bg-normalInputBg border-none justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
            name={ name }
            register={ register }
            mode="single"
            selected={date}
            onSelect={ setDate }
            initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
