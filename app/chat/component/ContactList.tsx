
import React from 'react'
import { NavLink } from 'react-router'

import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';
import type { Client } from '../interfaces/chat.interface';

interface Props {
    clients: Client[];
}

const ContactList = ({ clients }: Props) => {
    return (
        <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-4 p-4">
                <div className="space-y-1">
                    <h3 className="px-2 text-sm font-semibold">Contacts</h3>
                    <div className="space-y-1">

                        {
                            clients.map((client) => (
                                <NavLink
                                    key={client.id}
                                    to={`/chat/client/${client.id}`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "w-full justify-start flex items-center gap-2 bg-gray-200 text-gray-900 rounded-full pl-2 py-1 transition-all duration-300"
                                            : "w-full justify-start flex items-center gap-2 pl-2 py-1 "
                                    }
                                >
                                    <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 shrink-0 flex items-center justify-center text-white text-xs">
                                        {client.name.charAt(0)}
                                    </div>
                                    {client.name}
                                </NavLink>
                            ))
                        }


                    </div>
                </div>
                <div className="pt-4 border-t mt-4">
                    <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
                    <Button variant="ghost" className="w-full justify-start">
                        <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 shrink-0 flex items-center justify-center text-white text-xs">
                            TM
                        </div>
                        Thomas Miller
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <div className="h-6 w-6 rounded-full bg-red-500 mr-2 shrink-0 flex items-center justify-center text-white text-xs">
                            SB
                        </div>
                        Sarah Brown
                    </Button>
                </div>
            </div>
        </ScrollArea>
    )
}

export default ContactList
