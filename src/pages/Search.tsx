import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Search: React.FC = () => {
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
                
            </IonContent>
        </IonPage>
    );
};

export default Search;