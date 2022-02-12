import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard } from '@ionic/react';

const Restaurant: React.FC = () => {
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
                <IonCard>
                    
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Restaurant;