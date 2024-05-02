'use client'

import BikeCard from "@/components/BikeCard";
import CustomButton from "@/components/CustomButton";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { allPageFetc, fetchBike } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {

  const [allBaikes, setallBaikes] = useState([])
  const [allBaikesStolen, setallBaikesStolen] = useState([])
  const [loading, setLoading] = useState(false)
  
  const [currentPage, setCurrentPage] = useState(1)

  
 
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  
  
  
  const getBike = async () => {
    setLoading(true)
    try {
      const result = await fetchBike({
        pageNumber: currentPage,
      });
      
      setallBaikes(result.bikes);
    } catch (error) {
      console.error('Erorr Fetching !!',error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBike()
  }, [currentPage])
  
  
  
  const getPage = async () => {
    
    try {
      const res = await allPageFetc();
      setallBaikesStolen(res.proximity);
    } catch (error) {
      console.error('Erorr Fetching !!',error)
    } finally {
    }
  }
  
  useEffect(() => {
    getPage()
  }, [currentPage])
  

  
  const isDataEmpty = !Array.isArray ||  allBaikes.length < 1 || !allBaikes;
  
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="registe">
        <div className="home__container">
          <h1 className="text-4xl font-extrabold mb-2">Bike Regester</h1>
          <p>Explore the stolen Bikes in <strong>Munich</strong></p> <br />
          <span>There <strong>({allBaikesStolen})</strong> thefts cases in Munich </span>
        </div>

        <div className="home__filters">
          <SearchBar />          
        </div>

        {!isDataEmpty ? (
          <section>
            {loading ? (
              <div className="mt-16 w-full flex-center">
                <Image src='/loading-svgrepo-com.svg' alt="loading.." width={50} height={50}
                  className="animate-spin"
                />
              </div>
            ):(
              <div className="home__bike-wrapper">
              {allBaikes?.map((item, key) => (
                <BikeCard bike={item} key={key}  />
              ))}
            </div>
            )}
          </section>
        ):
        (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )
      }

      

      </div>
      <div className="flex w-full items-center justify-center gap-7 mt-10">
        <CustomButton title="Prev Page" handelClick={handlePrevPage}
          containerStyles='py-[16px] rounded-full bg-primary-blue'
          textStyle='text-white text-[14px] leading-[17px] font-bold'
          isDisabled={currentPage === 0}
        />
        <p className="font-bold">--{currentPage}--</p>
        <CustomButton title="Next Page" handelClick={handleNextPage} 
          containerStyles='py-[16px] rounded-full bg-primary-blue'
          textStyle='text-white text-[14px] leading-[17px] font-bold'
          isDisabled={isDataEmpty}
        />
      </div>
    </main>
  );
}
