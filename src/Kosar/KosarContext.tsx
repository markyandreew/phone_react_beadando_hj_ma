



import React, {createContext,useContext,useState} from "react";



interface KosarElem{
    nev:String; 
    ar:number;
}


//kosárba uj elem  komponens! 
const KosarContext=createContext<{
    kosarElemek:KosarElem[]; //kosar tartalma egy listaba
    hozzadKosarhoz:(ujElem:KosarElem)=> void; //igy adhatsz uj elemet a kkosarhoz
    //torlés
    torolElem:(index:number) => void;
}>({
    kosarElemek:[],
    hozzadKosarhoz:() =>{},
    torolElem:()=>{},
})



export const KosarProvider : React.FC<{children : React.ReactNode}>=({children }) => {
    const [kosarElemek,setkosarElemek]=useState<KosarElem[]>([]); //tárolja az adatokat aktualis értek

    //ujelem hozzaadasa
    const hozzadKosarhoz = (ujElem:KosarElem) =>{
        setkosarElemek((elozok) => [...elozok,ujElem]);
        alert(`${ujElem.nev} hozzáadva a kosárhoz!` )
    };



    const torolElem = (index: number) => {
    setkosarElemek((elozok) => elozok.filter((_, i) => i !== index)); // törli az adott indexű elemet
  };


    //Provider: megosztja a kosár adatait
    return(
        <KosarContext.Provider value={{kosarElemek,hozzadKosarhoz,torolElem}}>
            {children}
            </KosarContext.Provider>
    );
};


export const UseKosar=()=>useContext(KosarContext);

