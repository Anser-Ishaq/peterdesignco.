'use client';
import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';


type CustomDrawerProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomDrawer: React.FC<CustomDrawerProps> = ({ open, setOpen }: CustomDrawerProps) => {
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    return (
        <>
            <Drawer
                // title="Basic Drawer"
                placement={placement}
                closable={{ placement: 'end' }}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <ul className='flex flex-col gap-10 text-lg font-medium text-primary'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Careers</li>
                    <li className='cursor-pointer'>Team</li>
                    <li className='cursor-pointer'>Shop</li>
                    <li className='cursor-pointer'>Mdeling</li>
                </ul>
            </Drawer>
        </>
    );
};

export default CustomDrawer;