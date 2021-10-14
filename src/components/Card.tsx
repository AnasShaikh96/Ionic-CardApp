import React, { useState } from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol, IonItem, IonLabel, IonToggle, IonList, IonIcon } from '@ionic/react';
import "./card.css"
import { moon } from "ionicons/icons"


export const CardExamples: React.FC = () => {

    const [darkTheme, setDarkTheme] = useState({})
    const [darkMode, setDarkMode] = useState(false)
    const [lightTheme, setLightTheme] = useState("")

    const handleClick = () => {
        setDarkMode(!darkMode);
        !darkMode ? setDarkTheme({ "--ion-background-color": "#333" }) : setDarkTheme({ "--ion-background-color": "#fff" });
        !darkMode ? setLightTheme("light") : setLightTheme("dark");
    }

    return (
        <IonApp style={darkTheme} >
            <IonHeader >
                <IonToolbar>
                    <IonTitle color={lightTheme}>Phone Card</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonList>
                    <IonItem lines="full" >
                        <IonIcon slot="end" icon={moon} color={lightTheme} ></IonIcon>
                        <IonLabel slot="end" color={lightTheme}>Dark mode</IonLabel>
                        <IonToggle slot="end" name="dark-mode" color="dark" checked={darkMode} onClick={handleClick} ></IonToggle>
                    </IonItem>
                </IonList>
                <IonRow>
                    <IonCol size="12" sizeSm="6" sizeLg="4">
                        <IonCard>
                            <img src="assets/placeholder.jpg" width="" />
                            <IonCardHeader >
                                <IonCardSubtitle color={lightTheme} >Spain</IonCardSubtitle>
                                <IonCardTitle color={lightTheme} >Unsplash, Image</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent mode="ios">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repudiandae veniam possimus temporibus ducimus, iusto explicabo molestiae soluta provident non!
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="12" sizeSm="6" sizeLg="4">
                        <IonCard>
                            <img src="assets/placeholder-2.jpg" width="" />
                            <IonCardHeader>
                                <IonCardSubtitle color={lightTheme}>France</IonCardSubtitle>
                                <IonCardTitle color={lightTheme}>Unsplash, Image</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent mode="ios">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repudiandae veniam possimus temporibus ducimus, iusto explicabo molestiae soluta provident non!
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="12" sizeSm="6" sizeLg="4">
                        <IonCard>
                            <img src="assets/placeholder-3.jpg" width="" />
                            <IonCardHeader>
                                <IonCardSubtitle color={lightTheme}>Italy</IonCardSubtitle>
                                <IonCardTitle color={lightTheme}>Unsplash, Image</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent mode="ios">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repudiandae veniam possimus temporibus ducimus, iusto explicabo molestiae soluta provident non!
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="12" sizeSm="6" sizeLg="4">
                        <IonCard>
                            <img src="assets/placeholder-4.jpg" width="" />
                            <IonCardHeader>
                                <IonCardSubtitle color={lightTheme}>Rome</IonCardSubtitle>
                                <IonCardTitle color={lightTheme}>Unsplash, Image</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent mode="ios">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repudiandae veniam possimus temporibus ducimus, iusto explicabo molestiae soluta provident non!
                            </IonCardContent>
                        </IonCard>
                    </IonCol>


                </IonRow>
            </IonContent>

        </IonApp >
    );
};
