"use client"

import Image from "next/image";
import {
    useOrganizationList,
    useOrganization
} from "@clerk/nextjs"

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface ItemProps {
    id: string
    name: string
    imageURL: string
}

export const Item= ( {
    id,
    name,
    imageURL}:ItemProps)=>{
        const {organization} = useOrganization();
        const {setActive}= useOrganizationList();
        const isActive = organization?.id === id;

        const onClick = ()=>{
            if(isActive) return 
            setActive({organization: id});
        }


        return (
            <div className="aspect-square relative">
                <Hint label={name} side="right" align="start" sideOffset={19}>
                <Image src={imageURL}
                fill={true}
                alt={name}
                className={cn("rounded-md w-2 cursor-pointer opacity-60 hover:opacity-100 transition",
                     isActive && "opacity-100"
                )}
                onClick={onClick}>

                </Image>
                </Hint>
            </div>
        )
}