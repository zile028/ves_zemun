import React from 'react';
import {BiChevronRight} from "react-icons/bi";

const ContactInfo = () => {
    return (
        <article className="contactPage-info col-md">
            <h3 className="title">Контакт информације</h3>
            <p>Студентска служба пружа својим студентима висок ниво услуга. У сарадњи са студентима непрекидно усавршава
                административне пословне процесе. У студентској служби можете:</p>
            <ul>
                <li><BiChevronRight/><span>Уписати и оверити семестар.</span></li>
                <li><BiChevronRight/><span>Добити информације у вези режима студија.</span></li>
                <li><BiChevronRight/><span>Добити уверење о статусу.</span></li>
                <li><BiChevronRight/><span>Добити уверење о положеним испитима.</span></li>
                <li><BiChevronRight/><span>Поднети и друге молбе.</span></li>
                <li><BiChevronRight/><span>Пријавити испит.</span></li>
                <li><BiChevronRight/><span>Поништити испит.</span></li>
                <li><BiChevronRight/><span>Добити информације о преласку са других факултета и признавању испита.</span>
                </li>
            </ul>
        </article>
    );
};

export default ContactInfo;
