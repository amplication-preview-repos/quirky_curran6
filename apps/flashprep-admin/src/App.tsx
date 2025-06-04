import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WalletTransactionList } from "./walletTransaction/WalletTransactionList";
import { WalletTransactionCreate } from "./walletTransaction/WalletTransactionCreate";
import { WalletTransactionEdit } from "./walletTransaction/WalletTransactionEdit";
import { WalletTransactionShow } from "./walletTransaction/WalletTransactionShow";
import { CoursePricingList } from "./coursePricing/CoursePricingList";
import { CoursePricingCreate } from "./coursePricing/CoursePricingCreate";
import { CoursePricingEdit } from "./coursePricing/CoursePricingEdit";
import { CoursePricingShow } from "./coursePricing/CoursePricingShow";
import { StudentProfileList } from "./studentProfile/StudentProfileList";
import { StudentProfileCreate } from "./studentProfile/StudentProfileCreate";
import { StudentProfileEdit } from "./studentProfile/StudentProfileEdit";
import { StudentProfileShow } from "./studentProfile/StudentProfileShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { FlashcardList } from "./flashcard/FlashcardList";
import { FlashcardCreate } from "./flashcard/FlashcardCreate";
import { FlashcardEdit } from "./flashcard/FlashcardEdit";
import { FlashcardShow } from "./flashcard/FlashcardShow";
import { MicrobitList } from "./microbit/MicrobitList";
import { MicrobitCreate } from "./microbit/MicrobitCreate";
import { MicrobitEdit } from "./microbit/MicrobitEdit";
import { MicrobitShow } from "./microbit/MicrobitShow";
import { CategoryTagList } from "./categoryTag/CategoryTagList";
import { CategoryTagCreate } from "./categoryTag/CategoryTagCreate";
import { CategoryTagEdit } from "./categoryTag/CategoryTagEdit";
import { CategoryTagShow } from "./categoryTag/CategoryTagShow";
import { EnrollmentList } from "./enrollment/EnrollmentList";
import { EnrollmentCreate } from "./enrollment/EnrollmentCreate";
import { EnrollmentEdit } from "./enrollment/EnrollmentEdit";
import { EnrollmentShow } from "./enrollment/EnrollmentShow";
import { TimetableList } from "./timetable/TimetableList";
import { TimetableCreate } from "./timetable/TimetableCreate";
import { TimetableEdit } from "./timetable/TimetableEdit";
import { TimetableShow } from "./timetable/TimetableShow";
import { TimetableEntryList } from "./timetableEntry/TimetableEntryList";
import { TimetableEntryCreate } from "./timetableEntry/TimetableEntryCreate";
import { TimetableEntryEdit } from "./timetableEntry/TimetableEntryEdit";
import { TimetableEntryShow } from "./timetableEntry/TimetableEntryShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { FlashcardDeckList } from "./flashcardDeck/FlashcardDeckList";
import { FlashcardDeckCreate } from "./flashcardDeck/FlashcardDeckCreate";
import { FlashcardDeckEdit } from "./flashcardDeck/FlashcardDeckEdit";
import { FlashcardDeckShow } from "./flashcardDeck/FlashcardDeckShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { SavedContentList } from "./savedContent/SavedContentList";
import { SavedContentCreate } from "./savedContent/SavedContentCreate";
import { SavedContentEdit } from "./savedContent/SavedContentEdit";
import { SavedContentShow } from "./savedContent/SavedContentShow";
import { ReferralList } from "./referral/ReferralList";
import { ReferralCreate } from "./referral/ReferralCreate";
import { ReferralEdit } from "./referral/ReferralEdit";
import { ReferralShow } from "./referral/ReferralShow";
import { ErrorCardList } from "./errorCard/ErrorCardList";
import { ErrorCardCreate } from "./errorCard/ErrorCardCreate";
import { ErrorCardEdit } from "./errorCard/ErrorCardEdit";
import { ErrorCardShow } from "./errorCard/ErrorCardShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FlashcardSessionEntryList } from "./flashcardSessionEntry/FlashcardSessionEntryList";
import { FlashcardSessionEntryCreate } from "./flashcardSessionEntry/FlashcardSessionEntryCreate";
import { FlashcardSessionEntryEdit } from "./flashcardSessionEntry/FlashcardSessionEntryEdit";
import { FlashcardSessionEntryShow } from "./flashcardSessionEntry/FlashcardSessionEntryShow";
import { FlashcardSessionList } from "./flashcardSession/FlashcardSessionList";
import { FlashcardSessionCreate } from "./flashcardSession/FlashcardSessionCreate";
import { FlashcardSessionEdit } from "./flashcardSession/FlashcardSessionEdit";
import { FlashcardSessionShow } from "./flashcardSession/FlashcardSessionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"flashprep"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="WalletTransaction"
          list={WalletTransactionList}
          edit={WalletTransactionEdit}
          create={WalletTransactionCreate}
          show={WalletTransactionShow}
        />
        <Resource
          name="CoursePricing"
          list={CoursePricingList}
          edit={CoursePricingEdit}
          create={CoursePricingCreate}
          show={CoursePricingShow}
        />
        <Resource
          name="StudentProfile"
          list={StudentProfileList}
          edit={StudentProfileEdit}
          create={StudentProfileCreate}
          show={StudentProfileShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Flashcard"
          list={FlashcardList}
          edit={FlashcardEdit}
          create={FlashcardCreate}
          show={FlashcardShow}
        />
        <Resource
          name="Microbit"
          list={MicrobitList}
          edit={MicrobitEdit}
          create={MicrobitCreate}
          show={MicrobitShow}
        />
        <Resource
          name="CategoryTag"
          list={CategoryTagList}
          edit={CategoryTagEdit}
          create={CategoryTagCreate}
          show={CategoryTagShow}
        />
        <Resource
          name="Enrollment"
          list={EnrollmentList}
          edit={EnrollmentEdit}
          create={EnrollmentCreate}
          show={EnrollmentShow}
        />
        <Resource
          name="Timetable"
          list={TimetableList}
          edit={TimetableEdit}
          create={TimetableCreate}
          show={TimetableShow}
        />
        <Resource
          name="TimetableEntry"
          list={TimetableEntryList}
          edit={TimetableEntryEdit}
          create={TimetableEntryCreate}
          show={TimetableEntryShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="FlashcardDeck"
          list={FlashcardDeckList}
          edit={FlashcardDeckEdit}
          create={FlashcardDeckCreate}
          show={FlashcardDeckShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="SavedContent"
          list={SavedContentList}
          edit={SavedContentEdit}
          create={SavedContentCreate}
          show={SavedContentShow}
        />
        <Resource
          name="Referral"
          list={ReferralList}
          edit={ReferralEdit}
          create={ReferralCreate}
          show={ReferralShow}
        />
        <Resource
          name="ErrorCard"
          list={ErrorCardList}
          edit={ErrorCardEdit}
          create={ErrorCardCreate}
          show={ErrorCardShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="FlashcardSessionEntry"
          list={FlashcardSessionEntryList}
          edit={FlashcardSessionEntryEdit}
          create={FlashcardSessionEntryCreate}
          show={FlashcardSessionEntryShow}
        />
        <Resource
          name="FlashcardSession"
          list={FlashcardSessionList}
          edit={FlashcardSessionEdit}
          create={FlashcardSessionCreate}
          show={FlashcardSessionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
