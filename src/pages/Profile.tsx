import { IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonItem,
    IonLabel,
    IonAccordionGroup,
    IonList
 } from '@ionic/react';

import Account from '../components/profile/Account'

const Profile: React.FC = () => {
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
                        <IonTitle className="text-center">個人資料</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonAccordionGroup>
                    <IonItem slot="header">
                        <IonLabel>Head</IonLabel>
                    </IonItem>
                    <IonList slot="content">
                        <IonItem>
                            <IonLabel>Red</IonLabel>
                        </IonItem>
                    </IonList>
                </IonAccordionGroup>
                <Account />
            </IonContent>
        </IonPage>
    );
};

export default Profile;