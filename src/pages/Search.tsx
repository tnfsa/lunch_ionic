import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonCardTitle,
    IonProgressBar,
    IonImg
} from '@ionic/react';

import { useState, useEffect } from 'react';

const Search: React.FC = () => {
    const [searchParam, setSearchParam] = useState("");
    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([{ price: 100, description: "bad", name: "Helloween", store_id: "best_store", id: "whoami",image: "haha" }]);
    const [storeData, setStoreData] = useState({})

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/stores`, {
            method: "GET",
            headers: { Accept: "application/json" }
        }).then(response => {
            return response.json()
        }).then(res => {
            let List = {};
            res.map((item: { id: string; name: string }) => {
                List = Object.assign(List, { [item.id]: item.name })
                return "garbage"
            })
            setStoreData(List)
        })
    }, [])

    const search = async () => {
        console.log("Searching")
        setLoading(true)
        const url = `${process.env.REACT_APP_API_ENDPOINT}/products/query`
        console.log(url)
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                term: searchParam
            })
        });
        const fetched = await res.json();
        console.log(fetched)
        const blackList = ["fea67b81-5b53-4b60-a021-525c41989174", "bc6e15a9-7c15-4d6e-b97a-330ff1b350a3"]
        let ans = []
        for (let i = 0;i < fetched.length; ++i) {
            console.log(blackList[0] === fetched[i]['store_id'])
            console.log(blackList[1] === fetched[i]['store_id'])

            if (blackList[1] === fetched[i]['store_id']) {
                // do nothing
            }else if(blackList[0] === fetched[i]['store_id']){
                // do nothing
            }else{
                ans.push(fetched[i])
            }
        }
        setResult(ans);
        setLoading(false);
        setView(true);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>美廣點餐系統</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size="large">美廣點餐系統</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonTitle className="text-center">搜尋商品</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonProgressBar type="indeterminate" hidden={!loading} /><br />
                <form onSubmit={(e) => { e.preventDefault(); search() }}>
                    <IonSearchbar value={searchParam}
                        onIonChange={e => setSearchParam(e.detail.value!)}
                        showCancelButton="focus"
                        inputMode="search" />
                </form>
                <div hidden={!view}>
                    {result.map((data: {price: number;image: string;description: string;name:string;store_id:string;id: string;}) => (
                        <IonCard key={data.id} className="flex flex-row h-32">
                            <div className="mx-auto">
                                <IonImg src={data.image} className="object-cover h-32" />
                            </div>
                            <div>
                                <IonCardHeader>
                                    <IonCardSubtitle>{store_id2name(data.store_id, storeData)}</IonCardSubtitle>
                                    <IonCardTitle>{data.name}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    {data.description}
                                </IonCardContent>
                            </div>
                        </IonCard>
                    ))}
                </div>
            </IonContent>
        </IonPage>
    );
};



type tlist = {
    [key: string]: string
}

function store_id2name(storeID: string, list: tlist) {
    if (storeID in list) {
        return list[storeID];
    }
    return "undefined"
}



export default Search;