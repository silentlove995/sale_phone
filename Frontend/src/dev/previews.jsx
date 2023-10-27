import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Analytics from "../app/views/dashboard/Analytics";
import UpgradeCard from "../app/views/dashboard/shared/UpgradeCard";
import Campaigns from "../app/views/dashboard/shared/Campaigns";
import Sidenav from "../app/components/Sidenav";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Analytics">
                <Analytics/>
            </ComponentPreview>
            <ComponentPreview path="/UpgradeCard">
                <UpgradeCard/>
            </ComponentPreview>
            <ComponentPreview path="/Campaigns">
                <Campaigns/>
            </ComponentPreview>
            <ComponentPreview path="/Sidenav">
                <Sidenav/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews