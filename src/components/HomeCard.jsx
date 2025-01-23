import React from 'react';
import { Button } from './ui/button';

const HomeCard = ({ title }) => {
   return (
      <div className="card bg-base-100 shadow-xl">
         <div className="card-body">
            <h2 className="card-title flex-1">{title}</h2>
            <div className="card-actions justify-end mt-2">
               <Button>Read Now</Button>
            </div>
         </div>
      </div>
   );
};

export default HomeCard;