import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonImg
} from '@ionic/react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'

// import { useEffect } from 'react';

const Home: React.FC = () => {
    SwiperCore.use([Autoplay]);
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
                <Carousel />
            </IonContent>
        </IonPage>
    );
};

const Carousel: React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            speed={400}
            loop={true}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => { console.log('slide change') }}
            onSwiper={swiper => { console.log(swiper) }}>

            {carousel_info.map((data: { src: string; text: string; brand: string }, index: number) => (
                <SwiperSlide key={index}>
                    <IonCard className="px-5 md:px-10">
                        <IonItem>
                            <IonImg src={data.src} className="mx-auto mb-auto object-cover md:h-80 md:w-96 h-44 w-52" />
                            <div className="flex flex-col space-y-5 md:w-40 w-28">
                                <IonCardTitle>{data.brand}</IonCardTitle>
                                <IonCardSubtitle>{data.text}</IonCardSubtitle>
                            </div>
                        </IonItem>
                    </IonCard>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}

const carousel_info = [
    {
        src: "https://i.imgur.com/MrGY5EL.jpeg",
        text: "Windows XP!!",
        brand: "Imger"
    },
    {
        src: "https://i.pinimg.com/originals/e0/0e/23/e00e23a03f611656eae3b5bb0c29da37.gif",
        text: "Hashimoto Kanna!",
        brand: "Pinterest"
    },
    {
        src: "https://i.pinimg.com/564x/bc/5a/c0/bc5ac023df850aa9ace659c66130ac61.jpg",
        text: "Kanna",
        brand: "Pinterest"
    }
]

export default Home;