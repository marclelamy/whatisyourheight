'use client'

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



export default function Home() {
    const [height, setHeight] = useState(0);
    const [unit, setUnit] = useState("cm");  // Step 1: Initialize unit state

    return (
        <main className="w-screen h-screen flex items-center justify-center">
            <div className="w-[200px] flex flex-col gap-3 h-2/5">
                <p className="text-sm">How tall are you?</p>
                <Input
                    placeholder="Enter the value here..."
                    onChange={(e) => { setHeight(e.target.value) }}
                    className="w-full h-10 border border-border focus:outline-none"
                />

                <div className="flex flex-row items-center justify-between gap-4">
                    <Select onValueChange={value => setUnit(value)}>
                        <SelectTrigger className="w-1/2">{unit}</SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cm">cm</SelectItem>
                            <SelectItem value="in">in</SelectItem>
                        </SelectContent>
                    </Select>

                    <AlertDialog>
                        <AlertDialogTrigger
                            className="h-10 w-1/3 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        >
                            Check
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Your height is {height} {unit}.
                                </AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction>Thanks for letting me know!</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </main>
    );
}