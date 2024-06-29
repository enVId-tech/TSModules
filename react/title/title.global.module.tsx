import React from 'react';
import { Helmet as Head, HelmetProvider as HTML } from "react-helmet-async";

interface ClassHelmetProps {
    title?: string;
}

const templatedTitle: string = "Template Website";

const ClassHelmet: React.FC<ClassHelmetProps> = (props: ClassHelmetProps): React.JSX.Element => {
    return (
        <HTML>
            <Head>
                {
                    props.title ? 
                        <title>{props.title} - {templatedTitle}</title> 
                    : 
                        <title>{templatedTitle}</title>
                }
            </Head>
        </HTML>
    )
}

export default ClassHelmet;