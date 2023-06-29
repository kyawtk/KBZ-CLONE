import React from "react";
import Carousel from "./Carousel";
import {motion} from 'framer-motion'
import { Tabs ,Button} from "flowbite-react";
import NewsCard from "./NewsCard";
import { dummyNews } from "../data/dummyNewsData";
const News = () => {
  return (
    <Tabs.Group aria-label="Default tabs" style="underline" className="mx-auto">
      
      <Tabs.Item  title="Daily News" className="relative">

       <DailyNews news={dummyNews}></DailyNews>
       
      </Tabs.Item>
      <Tabs.Item title="Hightlight Features">
        <div className="w-5/6 mx-auto">
          <Carousel></Carousel>
        </div>
      </Tabs.Item>

      <Tabs.Item title="Coperate News">
      <DailyNews news={dummyNews}></DailyNews>
     

      </Tabs.Item>
      
    </Tabs.Group>
  );
};

export default News;


function DailyNews({news}){
    return(
        <div className="flex flex-wrap justify-center relative">
           {news.map(item =>{
            return <NewsCard key={item.id} {...item}></NewsCard>
           })}
            <Button className="absolute bottom-[-40px] right-60 ">See all</Button>
        </div>
    )
}