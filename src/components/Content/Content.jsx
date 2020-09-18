import React from "react";
import './Content.scss'

const auto = [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90385570-highres-the-new-bmw-communic-1583423938.jpg',
    'https://turbologo.ru/blog/wp-content/uploads/2019/12/Mercedes-Benz-logo-cover.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk74yRfKee2ky70VHzQDmdcHeWG8bxCugp5w&usqp=CAU',
    'https://i.pinimg.com/736x/e6/2d/94/e62d94a95417df5b9168f8eeb0c44ece.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3o_B7jV-oLzpha_iTKU-6TYguEFe_O7kKTQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpKQ3G9x7fLd5ntlm4EOoId7u6mtnG3rX4cQ&usqp=CAU',
    'https://s0.rbk.ru/v6_top_pics/media/img/9/68/755868697946689.jpg',
    'https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/c-class/saloon-w205/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery_6cb4/par/contentgallerytile_8/image.MQ6.8.20200213101808.jpeg',
    'https://turbologo.ru/blog/wp-content/uploads/2019/12/Mercedes-Benz-logo-cover.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90385570-highres-the-new-bmw-communic-1583423938.jpg'
]
const st = [
    {
        backgroundImage:'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90385570-highres-the-new-bmw-communic-1583423938.jpg")'
    },
    {
        backgroundImage:'url("https://turbologo.ru/blog/wp-content/uploads/2019/12/Mercedes-Benz-logo-cover.jpg")'
    },
    {
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk74yRfKee2ky70VHzQDmdcHeWG8bxCugp5w&usqp=CAU")'
    },
    {
        backgroundImage:'url("https://i.pinimg.com/736x/e6/2d/94/e62d94a95417df5b9168f8eeb0c44ece.jpg")'
    },
    {
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3o_B7jV-oLzpha_iTKU-6TYguEFe_O7kKTQ&usqp=CAU")'
    },
    {
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-sGSrXkcqELXed86aXjdIE31R47BjCccBqw&usqp=CAU")'
    },
    {
        backgroundImage:'url("https://s0.rbk.ru/v6_top_pics/media/img/9/68/755868697946689.jpg")'
    },
    {
        backgroundImage:'url("https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/c-class/saloon-w205/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery_6cb4/par/contentgallerytile_8/image.MQ6.8.20200213101808.jpeg")'
    },
    {
        backgroundImage:'url("https://turbologo.ru/blog/wp-content/uploads/2019/12/Mercedes-Benz-logo-cover.jpg")'
    },
    {
        backgroundImage:'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90385570-highres-the-new-bmw-communic-1583423938.jpg")'
    }
]
function Content (){
    return(
        <div className="container content">
            <div className='block1'>
                <div className='justify-center row' style={st[0]}></div>
                <div className='justify-center row' style={st[1]}></div>
            </div>
            <div className='block2'>
                <div className='justify-center row' style={st[2]}></div>
                <div className='justify-center row' style={st[3]}></div>
                <div className='justify-center row' style={st[4]}></div>
            </div>
            <div className='block3'>
                <div className='justify-center row' style={st[5]}></div>
            </div>
            {/*<div className='block4'  >*/}
            {/*    <div className='justify-center row' style={st[6]}></div>*/}
            {/*    <div className='justify-center row' style={st[7]}></div>*/}
            {/*    /!*<div className='justify-center row' style={st[8]}></div>*!/*/}
            {/*    /!*<div className='justify-center row' style={st[9]}></div>*!/*/}
            {/*</div>*/}
        </div>
    )
}

export default Content;