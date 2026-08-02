import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import OpenAccounts from '../OpenAccounts'
function PricingPage() {
    return ( 
        <>
        <Hero/>
        <OpenAccounts/>
        <Brokerage/>    
        </>
     );
}

export default PricingPage;