import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {

        cName: "nav-text",
        itemsData: [
            {
                itemsTitle: ' Acerca de este tablero',
                itemsPath: '/#',
                itemsIcon: <FaIcons.FaTrello/>

            }, {
                itemsTitle: ' Cambiar Fondo',
                itemsPath: '/#',
                itemsIcon: <BiIcons.BiPhotoAlbum/>
            }, {
                itemsTitle: 'Buscar Tarjetas',
                itemsPath: '/#',
                itemsIcon: <BiIcons.BiSearchAlt2/>
            }, {
                itemsTitle: 'Pegatinas',
                itemsPath: '/#',
                itemsIcon: <BiIcons.BiSticker/>
            }, {
                itemsTitle: 'Más',
                itemsPath: '/#',
                itemsIcon: <BiIcons.BiDotsHorizontalRounded/>
            }
        ]

    },
    {

        cName: "nav-text",
        itemsData: [
            {
                itemsTitle: ' Butler',
                itemsPath: '/#',
                itemsIcon: <FaIcons.FaConciergeBell/>
            }
        ]
    },
    {
             cName: "nav-text",
        itemsData: [
            {
                itemsTitle: ' Power Ups',
                itemsPath: '/#',
                itemsIcon: <FaIcons.FaRocket/>

            }, {
                itemsTitle: ' Calendario',
                itemsPath: '/#',
                itemsIcon: <BiIcons.BiCalendar/>
            }
        ]
    },
    {

        cName: "nav-text",
        itemsData: [
            {
                itemsTitle: ' Actividad',
                itemsPath: '/#',
                itemsIcon: <FaIcons.FaList/>
            }
        ]
    },

];
