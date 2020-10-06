import React from 'react';

interface SideProps {
    children: React.ReactNode,
    className?: string
}

const Hello = (props : SideProps) => {
 return (
     <div>
         { props.children }
     </div>
 );
}

export default  Hello;