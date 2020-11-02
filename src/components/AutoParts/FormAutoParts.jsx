import React, {Component, Fragment} from "react";
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPen} from "@fortawesome/free-solid-svg-icons";
import {faTimesCircle, faTrashAlt} from "@fortawesome/free-regular-svg-icons";


let x = [1,2,3,4,5,7,5,8,5,,4,5,,4,4,4,4,44,4,4,4,4,44,,4,4,858,8,8,,4,54,,4,5,4,,48,7,8,7,8,,8,4,45,4,8,77,7,,]
x.length = 50
class FormAutoParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreId: 0,
            search:''
        }
    }
    closeImage = e =>{
        let img = document.querySelector('.pars_image_open')
        img.style.display = 'none'
    }
    openImage = e =>{
        let img = document.querySelector('.pars_image_open')
        img.style.display = 'block'
    }
    search = e=>{
        let b = document.querySelector('.search > input')
        this.setState({
            search:b.value
        })
    }
   render() {
       console.log(this.props.score.scoreList)

       return (
           <Fragment>
               <div className="add_auto_parts">
                   <form>
                       <div className="score_list">
                           {
                               this.props.score.scoreList.map(el =>(
                                   <label>
                                       {el.name}
                                       <DefaultInput
                                           type='checkbox'
                                           value={el.id}
                                           name='score[]'
                                           width="5%"
                                       />
                                   </label>
                               ))
                           }
                       </div>

                       <div className="score_parts_form">
                           <DefaultInput
                               name='code'
                               placeholder="Պահեստամասի համարը / CODE"
                               width="25%"
                           />
                           <DefaultInput
                               type='number'
                               name='price'
                               placeholder="Արժեքը(Դրամ)"
                               width="15%"
                           />

                           <DefaultInput
                               type='number'
                               name='count'
                               placeholder="Առկա քանակը"
                               width="15%"
                           />
                           <DefaultInput
                               name='count'
                               placeholder="Լրացուցիչ ինֆորմացիյա"
                               width="30%"
                           />

                       </div>

                       <div className='score_parts_view'>
                           <label>
                               Նոր
                               <DefaultInput
                                   type='checkbox'
                                   value="ՕգտՆորագործված"
                                   name="new"
                                   width="5%"
                               />
                           </label>

                           <label>
                               Օգտագործված
                               <DefaultInput
                                   type='checkbox'
                                   value="Օգտագործված"
                                   name='new'
                                   width="5%"
                               />
                           </label>
                           <div className='parts_image'>
                               <label className='file row align-center'>
                                   <span className='file__name'>Ներբեռնել լուսանկար․․․</span>
                                   <DefaultInput
                                       className="file_input"
                                       type="file"
                                       placeholder='Լուսանկար․․․'
                                       width='10%'
                                       name='image'
                                   />
                               </label>
                           </div>
                       </div>

                       <DefaultBtn
                           type="submit"
                           name='Առաջ'
                           color="#fff"
                           width='15%'
                           background="rgb(74 141 210)"
                       />
                   </form>
               </div>

               <div className='pars_image_open'>
                   <div>
                       <span onClick={this.closeImage}><FontAwesomeIcon icon={faTimesCircle} /></span>
                       <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXGB8XGBYYFhsYFxsZFx4aFxoXHRcYHiggGBolHhcZITEhJSkrLi4uGiAzODMtNygtLisBCgoKDg0OGhAQGi0lHx8tLS0tLysvLS0tLS0tLS0rKy0tLS8rLzgtNy84LSsrLS0tLS0tLSsuLS81Ky81LysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xABFEAACAQIEBAMECAQDBwMFAAABAgMAEQQSITEFBkFREyJhMnGBkQcUI0JSYqGxM4LB8HKy4RVDY3OS0fEXJFM1g6Kjwv/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAuEQACAgEEAQIEBQUBAAAAAAAAAQIRAwQSITFBUXEFEyLwMmGRwdEUobHh8WL/2gAMAwEAAhEDEQA/ANxooooAooooAooooApKWigEopaSgCilooBKKKQsO4oBaWsmfmfFtiCiTMBmOjqFAGvoDWn8NlLxRsTclFJPqQL1nDIpWdep0ksCi2079B1SUUtaHIJS0UUBznmCKWbQKCSfQamoTD80xGeHDOGWaVC6qBmAAGaxI28tjqLV15jnFliJ0a7yf8uPzN7rmw+NVP6OIDicViuJPsWMMPbKpu5HbWw+BoDRqSlpKAKWkpaASilooBKWiigCiiigCiiigCvMkgUXJAHcmwr1VB+lDByv9XkMby4ONmfExxyGOQ2UhGzAjyC5J8wtYUBfgaKzn6N+Z8uHOHmMjvE5swvKFhYgpnm9klblTrc5bi+9aKDQC0UU0xnEoov4jqvpe5/6RrQDuq/zVxSSJbRWzba/PpUhw/jMMzFEa7AZiCLHKTa/uvTLikSlnzEaEafyrRAj05exTAF8TGpOpAizW9LkimPGeGzwBbYkO7NbJ4QXTv7R0vYfGu2M4/k/iOVGwLShAf2vTI8dgOokhv38RSf3qyVg84n+KQNBfQVauVp7xMn4GPybzD9Sao5x8ebMZEt3Lrb53q08oPd5bbEKfT72v61DILRS0UVBJ5kYAEnYC5+FVbhwOJmLPcoNQL6D8IFvnUpzJi8kWUbvp8OtMuH4WSGMSBrKRdltr6b7+6pXRDK9zFDJfEQmYLmTIkjtchRrlu2p1vpft2qY+j/iWF+rx4SBhmhXKy6XJ3ZtN7m5+faqZzph5Zw0kbo4FyRex09DtSfRLwxs6ybE+cn8o2HxNPA8mw0UUVBIUUUUAlLRRQBRRRQBRRTXiePSCNpZDZVFz3PYDuSdKATiONEa30udBc6a6XP5RfWq7FztGs5gnCqBp4yNmjJ72tdV21ubHfQXrlwuPEYwGZwERx5bm9h0AW2o7m41+NoXmPk6eNGkV1kUeZgFKkW6hSTfT1qUQaUjAgEG4OoI2I70z43G7QSKl8xXYGxI+8oPQkXAPc9KzjlPmOTDgKfPET7Fxddrleq73sdDr1uavkHFpHXxViPhdiftLdWA2t0teoJMi5S4meH41sJKc0EgumllMbdABoCvatg4NPlJgY3yjNG34ozt8RtVC+k3loTRiaH2r+JEw6P7TJ6Bhc275vSvf0fcwHF4dV2xEGqg7m2jxmrrlFHw7LBzBzGSrJBKEYEgt4TSEW30BAvfoSKp+JjaRwWllaTUGSRgo3PlWFLRp7El2ILDw21733EsrgSLs417hhoQfWqdxCAq1hbQ2F72tdQL/lzCK56jxz3rycuqmpuFVR2Y8UWrJ7gCpCyumz6Ox9o36knWuPHsMJeJxxvcoct1uQDpfp7hXDhcuZSuuvmF99ddfzagkdM1qdQMXxsLnfQfIEVbQZXulB+5XUQ4TRn3074NIo0RBZfHBAuSBeM3tfYX1t61RuS+BfWBJPK/gYSCxlmy3Yk7RRr96Q6d7XHUgHSvp7w2cIP+Kp//AFtVExCFcHh8MD9kLyuL2u7g7nvqEvuA3pXop26M3ikoKfhnrFc0BD/7OBIEG0j2lmIGhJkcN8kWwJteu+A+kHiEbX8YPrYqbdLXGbKhG42a+tV6SM5ioKq1r5nyi3s2QWuBawIYWIGmgFqRcJPmzG0oFybMpFnvmsehIU2067HWrcmSo+hfo752GOQq2ki+0p9penpmW+l7Ag6HubxXzByhjWwuMhnTNlDKCcrAGGQhCLkDOQCCNLXXsFt9FYzig+reMv31GX3t/ZqGSiF4pifFn2JRNNNdBuf79a7c08YVYPLcXHY055XwoCNIeunwG5+Jqlc58yGKQ5LEdVPsn4dKl+hC9SgSTvNP4aswDmzWNhl63+FbnyXw0RQA2sW/RRoB8v2rM+UsOMZivGEYQNZAB2Grt8dBWzySLGlybKo/aoZKExeJWNC7myqLmorhPHxKC2UhL2B7e+o52fGyWF1iX+/nTHmLjkODiaGE2PU7irbSu6/YvQNFZ3yN9IEM7GEmzLup/wAynqvcbj9TogNULhRS0UAlFFLQCM1hc7d6y3nri5mmWMkiJbFBawe+hkJuNLbb9dr1p+IiDqyMLqwKkehFiKpfNPJ8kiK0cjStGmQI5AOUbWYAXYeu/cUBcsGoEaBdgot7raV2IqgcoczyAfV5lJZPKCdGFujA63FOuZOaZAvhxJlZjlzk3tfTQW31/WgKlhMUIMRI8JFkdgoIuuTzC/oB/Wp/hHF5BGUV7o3xy665SNge3yq1cA5fiw6CyAyW80hF2J3Op2F+1deL8ISVSVAEtvK9rajYMRuvT46a0Bywzxzw+C3lOW1vUbOvexF/39cc5nw83CscMUiWV7NINlzBiviLbdTa5HQML2rTuFMHC38txcXvcG1xe2x9ajOZJosXE2FxGUS/7p2sFYnTw2Oylhp2vY7gCpA/4RxBZQQpuk954G0Hm/3kJt95ence6mXHcOCA1s19CO9wRl97BmQdvEJqh8i49oHk4fMzIAfFglYH7ORTZSe2oyMKvvEeJjwPEMbHNa6JqwLWDFRuQtydNbDvXna3A5SU4d+Tp026nxwRPD5yrXJuQSSe43ZvRTfxf/uxirRg1jVhM7BQrbsQq6juffVd8DKcxFj20NiLnbVVAuBY5tET2SteDiWzXGh2vqWt2ztdrel7VrpdLKEt8vQzzZoy4R7594Y2OK+ERowa7BlW2UroxXK3zqvryI7RGMygNfRisbAC6m1vFN/ZqwxSXNzUhhzXYsaT3ES1M5Yo4n0rf6lF/wDTbEDVJoG9DhoLf/lLTPmDk3iTqM8WHcLqGjQB7C+hkCBAut7Zt7VrGHFSEIqxgfP+G4Y0OZpI8oRAM2QgMxI8oYErId9VPStmeNhHhsN95EUMOzsNR8NflU9Nw+OTV1Bb8Q8r6a+2tjTCTDNDL4oPi981g9z16K3T8PxqLJo9cVgXDRlgzWIsRmI95H/asp5sw8UqmSKa7ZgMhtmJJtbSr3zjipJ0+yX0te2u5BBsVPo1qzTlrhjyYs5lIKG1j0c6D5an4U/Mfkal9GvBxFHntsMg9/3j871YOOcNeYoA1kv5h/X+lPuH4ZYYlQaBRr/U3qmc38xRGFpJWK4QXCgHK+IdeikarEDu3X94j2JJVR35n5hjwsZhhIBA1PasQ41xWXFy+DDc3Pmbt/rTqZ8dxCORo4m8pzSMFIHhsbK9uh9OwJ2BtM4fk2eOBIMKQMTMwDMScyRkEswPQ7a9BfbcWcuOCFH1JHlnlZ8MUEaiSZ/uHp3Zj0A79LD47NwrCtFEiM2ZgNT09w9BsKieS+VYuHwLEnma3mc7sTqd9hck/wB6WCqFxaKSigClpKWgEopajuO8YjwsRlkJtcAAAlmZiAqqo1ZiSAAOp+IAb8a4Qj/aqp8UWuV0LqCLqejaC4v1Aqm83QmNwwDAAhgG0Pf+n7VOvzTiYx4uI4fPHDuXGSRlH4niidnUd8oa3WpcnDY+AWZZI2F1ZSCR+ZWHUf6HqKlMhjnhHEkxEayIQbjUdj106V64lj1iQsSL/dHUn/tWacT4BiMFJdGdkYgIyC9ydMrKNm7aG/TtXTAuTIBKWzZrNm0IHx1B3oSWjg/DZigNwBYWdrksfxZBbQ97i/usarvO3A5PLmKEMSLr0A1YlTsB7yLn1F9KdwoJOgAv7gKxznbmLxZXGYhBoxGtlH3R+5Pe/QCs8k9qOzR6b50+fwrlkBjuIWdlRrhTp3J6O/frYe+o+SVmbMzEt3J1+B6V6TCeKwMR3HlYjcdmtuPUe/uCJhJC5jy2Ye1c+VfXMNCPWuN23bPqMXysUVGPC8Fo5Z4yZD4Mhu1rqepA3B+GtTMyVV+XlRcQiRjMdS8hGtgDew6LsPW9XGRL124W9vJ8t8RWP572L39xjG+tS2EaoWYWNO8NxGJfbljX/E6j9zWlnFRacItSMS1D8L4jA+iTRMeyyKT8ganI1oDqDYXqD4liN6k8dNYWqrcRxFVJGsmJ836X9O3qPT1NrHWu/JHBQk7uzBtTIWNtSTYfIdffoNqZRrenIjuCp2IsfcdCDYi4I0I/0NCR7zVzHF4TSSNlwi3Ghs2JYfcXtEOrdf3zjhfD8TxvFCWQZYVtkS1kRBsSvbQ5V3Yj0JD/ABvLmM4lxApKAII7ZFH8JUFiCQNgNguhY67ajQn47w7haJB4q3YkWXzOziwJcrop2GtrAaABdJ/JFV6ssPCOFx4aIRRCyjc9WOxZj1OnwAAFgAKY43E4PBF5XMcbFbnzAMVXXQE6DQnSw0J6aZ9x36RcTIHWBBBbCPi1zkMZYhbKy2AK3Us9rhgqHqfLUMfhmn8VGDS+NhI2haSxmSa7GWNSAFQu0TxmwHlaPpYFRY27lvm7DY0ssRdZEALRSoY5Ap2bI26nuL7ip6swwXEfHwUePVg2JwRGaQbyQnfMfwshza66Ha5rS4JQ6q67MAR7jqKNUQmdKKKKgkSloooBtj8YIlBIuWIVVvYlj7+gAJJ6AE9KpXLeNbiWMOIlTJFhGIhjzZg8pupnuBYqqnKvq7HsB25+ln9hFYeJ9krgErHGQGlkZgLB29kDspt7Rqe5W4OuGgVbWJAuOoA2X3i5J9SaAmqrHE+UxnOIwcn1acm7WF4JT/xIgQL/AJ1s3rVnooCmHj1yuE4jGcNKzDw5A32TupBVoprAFri+RgG6Wbeji3LjKTNEzS3N2zG8lxuQRYEelri2narXj8FHMjRSosiMLMjAMp+BqqvwfF4HzYNjiIBvhZX+0UdoZm9oDoknuDLQEdx/mV1wvhj22sinr/Y7+7fes2xOHZGHmDHcFCTr8gb1Mc68VM2JZgMoXQLYaHrfpe+h93WorBM6FHEWdA3nIYKEB3fX2vd/pXFOW+R9ZpMP9NgTfnl+76PQ4wkeGWSPMXlva4IbcrtvfSuOEh8NGaVtTrIb9dxGPcdz1PoNW+HkbETtMehsn+Le/wDKNfeynpXHiU3iOIl9hN6lK3SKPJsi8uR9ff8AwvXJ6qYfFC2aQn35QbAe7S/xqP5i52SJjFh1E0235FPqRufQf0tVe4pxiRYkwMBs1vtGH3QxJye+xsfl3B78C4GqKNCSdQPvN+Yt91PXcjW4FjXalxR8tOe6Tl6kfLFjMWx8WV/WOMaAHuF295tXtOT0+/l/mkDf5M1quUeFUABrEDZF8sY+A1Y+unxp7gMI8sixQpHmOvmAChRuxbKW+GtyRtqRbgpbKBJycmuXL/LIF/z5b12wOK4jgCPAxEgA2iluUIHZX0PbMPnV5x+DeKRopkjzDXygFWU7MGyhhsRbSxB30JZSYVSCF0B3RvNGfgdQfXX4UFs6cF+klcQRFiUEE+3/AA2PoT7J9D89alZGzGqDx3gasDoQRqR95euYN95PXcDW5FyHfJXMDK/1PEHzf7pz1H4T69vl2Aq0WTLyiWr2tcDLXSJr1BIvE8O8kRCTzQkalomKscoOUG263OvoT1tWW8DIUYZyAniQTYee20ni6kknZ8hb0HgADa1bHh1rNeZuHRYWcxsTJBMrtJEn8aBgS6TJf7uYh+1/FHpV4K3RWTrkZ4RzEiuVzvg08KaO1z4LHVrHeIMzr18mIDHQUnEnWJWi8e2VBPgcSNRIh9qKQj2XIRLk7SQ62vYt+GJi8aQMNG0ssUIw7TReTMj6BJ/FsGsmZb6+yu9r1f8Al/6IQLti5z7SnwsOzJEwW38TPcvci+lra26W2qMOyluXRS8JxiUzYiLCQODi18ObDhTIqyvmzSRMuiJclvMQBnPQC228nDEjDKuJiWJksiqGDHIqqoLEEjMSG2J0t7g+4TwiDDKUw8McSk5iEUKCe5tufU12xmMSIXc2B0Hr12rKc1LhIvGNDiiq4vMEjvliizdr3v8ApoKn8OzFQXADdQDcfOsyx7paSloBCKxP6YuM4j64YYn+zjiUFBraRszEkd8pT4e+tsrC+f5kfFYtjkvny+YFh5AseoXU+z0oCt8q8Sxf1qJc72LWINwNNfwjt3rUxxHEr94/M1RPo8ijONj/AIWl/ZzjZWOqvttWxeAh7UTE1Top/EOZMQkUj+KqkIdWkuo/MQrZrD01qJ5b5zxkkjiSfDSRiJiRC0hYWtqRIxAFrjvcirdzfGEwczrB9YYLpDlL57sq2yrqRYk/Cs94Nig0OKb/AGaMGyoq5gjqXzkgrZ1G1r1WbpM202PfOKflohpnLMSdybn3nWmnEOY2EZggQEH2pG1v6KNrepv7utORGWJUdRb+/hXuLgwHSufBBP6me78X1U4OOGHF8/sjzhSYsPmPtBbfzNqfle3wFNMGwihedtcuo9XPsjXe3tW9K78cb7JF/Eb1w4+nkw0I+82dh/l+Vq0wK22cnxSW2Mca+6O3LWA0MkmpbzP6k7L31sfgpq4xYdz9mhAkcgM5F7a66DcKNbdSPdUXwpLBfS7/ACORfllB+Jp8spBuDYjYjf510nhkhxnhhwjkHEeNFlDCRwikHXMpKAKRsb20vanvA8BjywmggKWF1eYiIEHcZCDIP5lHSpXkrhRnP1zEEyZWKwByWsVNmk165gVXtlJ66Xqq2WSMw45gMeGM08Be48zQkShQNhkFpD/Kp67VFYbCmdWdZWSNI2fNEqySOw9iNQwIF9eh26VslZrz664bFxtAXjeZSZihKqTcKj6bsTcHv5SaWGiASKTKqy2Eyje1td7EdAb7dDr3qpcy4DQOnlI8yW0sV9pe9hcfBhVqaUkkk3J3J1NMuKqCG9bP8b5G/cn4CrFSR5a4gcTAkvUizejDQ/uD8asmGSqF9Gr5XxMB2DB1HvuD+4rRYRVDQeQLXOXlXCYucNiYhKVj8qknLowuSBudR8zXWGvPEziAgOGbLLmtewPlsSRYi3QH4UctqsVZboolUBVAUDQACwFvQV6LWqijm6SNCuIFpENmYFQDr5TkVs+xAPlIv6VD4znaRjcBGHYyi5+Byga26d6oskX5J2s0abiaLpqT/e99fkDVa5ixysVH3jt7huoHxB9begtUI8XxLFKWjEEMd8oklnRVvvbyFmvbXVa94j6OcZIySjisXiKcyKIzlJFjbN4l2HT2djtU9gvXKE62dNM17+pG36f1qZxnEY4yoZvMxChRqxJNtqztuGY6MjPA2cfeibOhPdSLMB/iC/HerJyvy/Ir/WMR7f3VJzEfmY9+w6e/YrBa6KKKsQLXy79IXEjHxPGR2K/bE2Gm9mv8bk/GvqKsH+kn6NMbLj5sTBGZUlYOCrKCvlClSGYHcGxF9DQFU5K4yfraHMTZWOp/KR2Ft603/bjEWvb1BFUvlj6PcbHiM0uHkUZG1IuLkrpudd6tUnKso1aOQDuI2P6Aa1Ak7djfjXGZTA6xYgRucoV2YqBZgTqL7gEbdajMHi8W0GJXE4lZxljKZWzAWY5r3VTrdflXvmHl5jDYQtN5hdGzwet87gD4U14BwJ44pz9W8C6G4EwmBy+YHMCbai1UmvpZ16LJtywX/pDDDE5tN6kPrFyVNww0KncH1/cHYjUVGxmzCk5k4gsqxYiIkhbrmAKm6HVb7lfTasMM6TR7vxPTrJKEk/qX90uTlxzaH++tJzCP/d4YdPD/AKiunGkvCrD7rW/7V45nPlwuIG2gJ7XGn6n9K20/TPM+Lx+tMm8FJ5dPwi3w/wBRVx47wfBx4SOWFj4vl1MjMXze3mUkgdSLAWtYWGlZ7wifysv4JGHwc+Kp91pLfympLNXQeObPyooGDw4H/wAa399tf1vUtVH+jrjyNH9WZhmW+TX2gdSB6gmrxVGWQVEc2xK2DnDAG0bEX6MB5SPUG1S9Uj6RePosf1ZWGZrZ9fZAN7e8miDKLJEGRcsUhYklpQzZVsbKoAOVRbzEtve2oAFMsdJ5T/hP6/60uao7i8/lVb+26ge5T4rH3ZUI/mFXKnXkL/6jiP8Akj/OK02Ks5+jVM0mJnPVggPe1yf1H61osJqrLIexV6xeN8FRJ2YfqCP615hrjxnCPLGI0UsSbkDsFIv8ytUne10WXZGjmC7mSaAGJybMQ9j2tfydDtXY47hsntQge6g/R/IAAJEOn5hr8vfTSbkScbBT7m/72rj+XP0NLQ5w8/DoJC6JfMuUodVGt81u/SncvHeHxKZ1jjVk8+i3ay+Y2At5iLgevuqqcT5Sx0RBjizBhcgeYi1wAbDfrp3rjwTlqbFzPhp1aEeE+Z8voVSwO5BlDeuUiunGmoqyjJbhf0zxzu6rg5AI43lc+It8kSl3IFtTYWAuLkjWtUrA5uDw8MxDqcTBOfBKSpGjmVELRmSRo0zhbRhvKWB819gSN3w06yIrowZGAZWGoKsLgg9iDWpU60UUUAUV5Jqp8G+kLCYrEHDQeIzAlczLlW69NTm/SgLdVT5v5wGFPhRIJJbXNz5EB2zW1JPbTTW40vU+YvpDjzHxEnCqoBjily3kJYG7KMxAta2m1Vp+d8QdcLgI4r7SSC7e/PKSb/CjRFmmcuc3zTRnxcLIXB08FbowPW7GyW9SaqXGvpJzyvhvDlI8QxSIqLlXK2Rgzm+a1j7JG1VoLxbHOI3xLXbZEOmgJOrFU2Bq/wDL/LjYKFI5YIXku32jMWJ1zeZbZc2ttNLDvRbaqyVKUXaM9lUR542RSbkFy1ittBYXv66A+tc+ITxzQeBmHjIviZLG+W9idrb1Mc6YLLMZABZ97DQMOgHutTTh0RiYZwpDjKSCCR+U9v8ASuDp0fYNrLiU4v8AFz/KIbhR8WAxne2X4rt+lq7cNg+sYSXDH20Pl+NyN/XMPTSuWJwxw2II+450bpf7uvxt8fSpXhMIGKV12kBDD1UXP62rfC6n7nm6+Knp2/Ma/wBFPwHETFIGfQG0M35Sp8kne2pHuNXDALG0ipMfsydd7FexI6HYnsb01515ZJzYmJc1xaWPuPxD163+PqKnwvjfggRS3aHZH+8n5WG+nzFtL7V1Hz5p/NUeDjmV8EsUdwMywZQgK383k8oY3A0/DrTzhfPWMXLGAJiTlUFSzk9vLqf6C52FUqKbMoZGDqdiCP8Ax+1SHB+JrDJmYN7NgQvmVrhldb6EhlB+FKILNxXnnGNmjK+Aw0ZchVx/16jvfrTLlWPCSTF8asUgANlnylCxt5vP5SwsRr+LSo/mnj4xc/ihCBlCgWPS+9tNyetQ0suVSzsEUbkkf+P3pQskeIJEsjJB/DBOW17AdgT0Gw9BftVPx/EfFkLJqBeGH8zNbO4620A9wrhxXjXjAxRXWLZ3t5m/Ko31+Z62FwbjyFyzquJmW1haGPsPxn1/8+pWSkTnLPDzhoEj67t6sdT+wFWXDSVwMVdIVtVSxLQNVV544mVljjU+yuY+9jYfGy/rVkjkCgsxAUAkk7ADUk+lYhxjmR555JUBJke0a21t7KC3U2y6dTQF0/8AUd8NZfFkdthGPPvsPNoPdvUthfpYxa+afhU3h/jXMGA75GS36gVRMPD9UXy2bEEeeW97E7qp3A9Rq250sKacP4piwM7kq1+gBFtLXGo71AN/5T51wfEAfq8nnAu0TjLKo75dmHS6ki/WpHivGY4VubsScqqupLbW9/8A2r53XFeNH/tLC3gxeGOdsugdASDJb5hhsRcG963/AJSxsWJwsOKjQL4qZyBrlZv4i39GuD7qkGHcWweJwHEknjw7qZ2aWKK2dmDk+JDYAknzHSxsCtxWwfRngcTDg/CxCeGBK5gjLBnSBjmRHK6ZgSw02XKLC1ha7UtAJRRS0AVS+C/RvhcPinxavKXZs4S4CKfQAXPxNXSigKrzZwmLw4x4YCiYubXHmYG5uNdbn9OwqIn4GgHlRV9QBf59avuIgV1KsLg9KiDwZ10SQFeiuNviKzlFtlk0URsNJE4caFTcN0uP761bhJicWisEjRRqC2YkmxBIsRZddvdXrivBJGhksVzZTZQDcka5QSdL7fGoLBc2usaqtrAaaCs/w99E9jfiHAZJWkhawky+Ig/EykeyfcTof1qgcU4bioco+rOpcmxcFEGW2Z2Zz5VGYWAte+lXXiXGXllQg2dQTfYgEEdO9/3qI43A0qWJOYG410J7e+s2l2elo9ZKFY26TfflexVXXUPJIZ5V9lmFoY/+XEdz+dh0GnWp/gOIR5RLazey6joWsPEH5TbXteq8RbQ70RuysHQkMNiN6iEpOSo9bU4MMMEr6ff5/fg1NYrVT+ZuRY5yZISIpDuLfZt7wNvh26VdpTTWR7V30fJGGY/l/F4RiQJI/wAyksh7arv7ta5DmDFpoxRv8QAP6WrZpjc06wvDIW1aGNvUop/cVBJh7cw4p9AyL/hCk/renvB+Ucfj2DLHLKD99rrGLnXztb32Ftq+heGcLw6arBCp7iNAfmBU7E1AZXwH6M0wwD4grLKNlA+yT3A+18e/Wph1ymrxj4bi9VXiGHtUEnBGvXtaaRtajF4wqLJkMjeyHbKt9szHfKD0AJOwBNARPPeMJgOFQ2Mg+0I6J+H+br6e+s85b4cVxqKx9hXkHvCtl+Iax+FaTx3haIDNJIsS5blpbq0jADVIjdwGP4rW921I4sPquKgxBByaxvpqAwPT3MT/AC0Az4rHiIvrErspQfwwNxrYdOg371W+DJM0gdCxOYbm97m1j6G9q0Pi8UpljVY0kwsqku5OhVugsfdrY79LVG4aCHDzpBDHM0kgJBJzKg1GgAF2vpc3tcdbVAHnKTRtLxDW8cOFnzk7W2UXO+36Vqf0MxMvB8Nm6+Iw9zSyEH4g3+NZ1xbAmCEcKw4X69xB18VRb7OIeYB7dTYs35Q3YX2/g/Dkw8EWHT2IkWNe9kAW59Ta9SB5RRRQCUUtFAFFJRQCSOACSbAC5PYDc1nWN+kssxGHhGXo8hNz65Baw95+VaJNEGUqwuGBBHodDWNcW5YlwkmVgWjJ8kltCOgPZu4+VZ5HJdFo0TOI5rxM65SVQHQiMEXHa5JPytXjh3BI5AzEML/hZl+NgbH3014bgy1ugq1wIEjJ7DT39KxVvlluhxxDgUH1ImKNUKp4qkasTlBN2OrXAtqT07VRsEfEYINb/t1NaumF+xER/wDjyH/py1l3C8O+GidpBaUkxqvUEHKbfH/+ax1+X5WO12+F7l8MHOVHDjnD4ZHJtlWNQpZbAs3QE9epJ3sKhuTkw0kxzyDOpvFGwtn6hxfRtNcu/Xal5txwjQQA73Lkdfx/M2QdhmPSm/L/AArLGcSxXxHvlzC6hB7bHotz5ATYaP6CqfDIzjDdJ8eDo12Tco476NAnamE71D8V4vJhoo2kW5cn7PNchRuwY69RYG97jbpzwPMmHlP8QI34ZPKfdc+U/AmvWTTPNaaJeJNalsItMsOnUajvUjh1pQslsIakYmqKw7U/R7C5NgNydvnUEj+1xaoPiWHrzxnm/CYQDxJLsfZjQZnc9lA0J+NVfjXEeKYpGaLD/VIspYeJriJAOoW3k6b2IvsRVWSeeKzLEMzOiLexeRsqA9gPakb8qAnba96rGH4zihMRh3VVdbePLFkmOt80cZuyprYbXsDYV35Xgw0pYThmlYZfFkYtIn+Hog9FAFNsXw9oX+qSGxBvh5emuvhk/hPSq7hZYeAclCdjLPKXf8TnO5PuPlX3+b3CrpjuWcLjcP8AVpkN0UJmBtIuX2SGtqOouCKpXKnFnX2gwyNlfTY9R6m2vy71fy5a0qEF1F9NnT+/7uKlcizLZ+UuLcNJSCNcdhb3C6ZgN7GMkMp/w5hpfS9qcYDFcZlGTCcKjwbNocRICGUdwZQCPgre6tkw04dQw2IrpUklO5C5ETA55pZDPi5f4k7X66lVvcgaC5OpsNgABcqKKAKKSigCilooBKWiigCvE0SsCrAMp0IIuD8DXuigICXlhAbxMU9CMy/C5uPnTjB8FysGkfPl1VQuVQe+5ual6KrsRNjLiuL8KMsPaPlUfmO3wGp+FZnxLHC7SlvLHcKT1a12c+4XPvIHSrlzRiBJGVjdSRcXvmF/ZZdNj0NZFzfxC2WBNQLX9dbi/cswJt1AHevBzT/qtU8ceouv5f7HoaeseJzZGYaE4rE3a9hqfyj7q+8Df1Jq84fEKAiTReIiABJI/JMgHTy2zj/zYmo3lrg7JCWsSx8zGxPqde4GvupwMUufw7G/u06/G2m+3S99KZ9bkhl24vwx496EMEZRufbILj+KE8zNYhR5UB3Cgn5Ekkn31A43DqoLm1h07noP76A1PcRmzuSNth6261W8cr4iYYeFGkYfdQFmPQmw6dL7aete5jk5QTapvwcEkk2kHAGkDNIrONRZUZgXdtETynUk6n0rfOGctCHBqJnd5wl3kMr+2dbDzWIF8o01sO9Zly1hlw08Qt9ZniGYYXDjxWEraZ5ZAfCiCja7Egi9tLVf/wDYPEcZ5sXiPqsf/wAGGa8pHZ8QR5exEYAq5Ur/ADJxJIZFU4l0INzDG0kkzD8Ph5gUGouXK29ajOIzYoLh+INFkhgYgpnaTEvGbrLJKyAJGVVGKtvfY0741weHDRp4CCMAglwL3scrO5OrHe9yaneGZWhLEKQcsTuLEuWJEWDkUKSEtOG8T11rFZC+0bcn8Liw+PTIC5dW+2ds7vmXxFcu2pBUA+metIxeHDrbY7qex7/0I6gkVlXKd4po8O98+EmWHe5OHmJ8FvUAkoT+RK1urw8kSMf514C0EhxUS2sftUHQ/iHdTuD29RUhwvBxcRgVZwfLYqQbMR2vuB679u9X3j3DPGjYA2Yrb/EN8p/p2+JrMcLK+Glym41t2/s1KjTM2iWx2FMLkEHIdCN/cR6084W2JzeDCNQQwZhoqnfXsSNRvt3p5NxxViafw1dkHlBOmY7XPT9+1S/KHE1xEAkX7wD3tYkNfcdCCGU/4K0CRNqNB/TavVFFQWCkpaKASilooBKWiigCiiigCiiigCuGMNkbUjQ6jceo9a70VWabi1F0/X0JRj3EkGESRyVLHTMFykoNSSBpnN7abm21U3g8YmxBZyPKcxF92PbuAAFHuBrbeY+ScNjFYPnRjsyNaxGoOU3B32t+utZBzRyBjMETIAZohr4sYN1Hd03T3i49a4dPpckYyeSVzl5OjJmi1GMVwvBZ+JzxxxlgVLDY3yhgBc3JFwdCdra76VBFQiEgEGTYH2lU2uNCR09+uu1QWA5gNgsozrcEMCQwtsQRr8RUs84k8y2y7LbYAbD0rnwaCUMn1df59F9/qaZNQnHjsZYrFpEA0l8t7WU2b1IPpp8xXPB4qWdPBiXw0kYRpBEPCWR2sB4rAl5bDUlmt6WqF4jMZ5giagGyjv2+e/yrWPoj5fBY4si6RXigP4m/3sw/yg/4h0r1ziNA5Y4HHg8PHh4wvlUZmChczfeYgdzfToLCpWiipBmfOcX2TDW9yBbqy2tp6ALp8a6cAJsp1V7MqzBSRGhMburRk+fxDHYG11vVrflqPO8m7uxbM/mIub2Aa4AGw06CmsvJyPfxMRiW1vYTyRge5Y2UAelZLHRZyKLxWYYaeDFhGjjS0My2JtC5AU36+G4RwffWvQyZgD3/ALNRUnLsLQPh3zujqUbMxY2YWOrG9VnkTmNIlPD8XKFxOHJiOa4zomiShjpZky9d1arxjtVEN2XuZiASBcgXA2ue16pWI5WlxkjTzN4dx9mgW3uLdf6n00FXiirEGBcZwmLwWIk8WM+CTcKGLIyHRgSfaIGt7E9LG1jof0aZgja5o2ZjG1rXRrPY+qv4gJ7tudzc8ZhElUpIoZT0I/X0PrXDhfCosOuWJSB6kn067DQfKhFD6iiihIUUUUAUUUUAlLSUUAUtFFAFFFFAFFFFAFJS0UBSua/o3wuLu6DwJjrnQeVj+ePQH3ixPesX5p4JiOHSGKU2LLdWRjkkW9vT4g7X9QT9OU04nwyHERmKeNZEP3WF/iOoPqNaA+bOV+CvO6RqPtJnyIfwgeaSU+igfvX0pwvAJh4Y4IxZI1CqOth1J6k7k9STUPy5yXhsFIZIs5YrkUu2bIhObIug0v1Nyepqx0AlFLSUAUtJS0AlY7zHF9R4mMS4zKzFJSR7UM5JB+F2X3oa2Oqzzryz9dRVUqG1Ulr2ynXp1DBSPe3egJPgOIvHkJzNGchb8S2BR79cyFST3zdqkqhuWeCnDRIryeJIsYjZwMoKqSVGW52zEXvU1QBSClpKAKKKKAKKWigEooooAoopaASloooBKKKKAWiiigCiiigCiiigCg0UUAhooooBaKKKASiiigA0tFFAFIaWigEpaKKAKKKKASiiigCiiigP/9k=" alt=""/>
                   </div>
               </div>

               <div className="get_list_auto_parts">
                   <div className='list_header'>
                       <ul>
                           <li style={{width:'15%'}}>Սրահը</li>
                           <li style={{width:'15%'}}>Համարը/CODE</li>
                           <li style={{width:'15%'}}>Անվանումը</li>
                           <li style={{width:'12%'}}>Արժեքը(Դ․)</li>
                           <li style={{width:'12%'}}>Քանակը</li>
                           <li style={{width:'12%'}}>Մուտքը</li>
                           <li style={{width:'12%'}}>Լուսանկարը</li>
                           <li style={{width:'10%'}}>Նոր կամ Օգտագործ</li>
                           <li style={{width:'10%'}}>Կարգավորում</li>
                       </ul>
                   </div>
                    <div className='search'>
                        <input type="text"/>
                        <button onClick={this.search}>search</button>
                    </div>
                   <div className="list_body">
                       {
                           x.map(el=>(
                               <ul onClick={this.openImage}
                                   data-code={el}
                                   style={{
                                       background:el == this.state.search?'red':''
                                   }}
                               >
                                   <li style={{width:'15%'}}>Սրահը</li>
                                   <li style={{width:'15%'}}>Համարը/CODE</li>
                                   <li style={{width:'15%'}}>Անվանումը</li>
                                   <li style={{width:'12%'}}>Արժեքը(Դ․)</li>
                                   <li style={{width:'12%'}}>Քանակը</li>
                                   <li style={{width:'12%'}}>Մուտքը</li>
                                   <li style={{width:'12%'}}>Լուսանկարը</li>
                                   <li style={{width:'10%'}}>Նոր</li>
                                   <li className='buttons' style={{width:'10%'}}>
                                       <span>
                                           <FontAwesomeIcon icon={faPen} />
                                       </span>
                                       <span>
                                           <FontAwesomeIcon icon={faTrashAlt} />
                                       </span>
                                   </li>
                               </ul>
                           ))
                       }
                   </div>
               </div>

           </Fragment>
       )
   }
}

const MapStateToProps = state => {
    return {
        score: state.score,
        location: state.location
    }
}

const MainFormAutoParts = connect(MapStateToProps)(FormAutoParts);
export default MainFormAutoParts;