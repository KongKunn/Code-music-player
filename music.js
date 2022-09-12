    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const app = {
        songs: [
            {
                name : 'To Good At Goodbye',
                singer : 'Sam Smith',
                path : './music/Too\ Good\ At\ Goodbyes\ -\ Sam\ Smith.mp3',
                image: './img/to\ good\ at\ goobye.jpg',
            },
            {
                name : 'Heart Attack',
                singer : 'Demi Lovato',
                path : './music/Heart\ Attack\ -\ Demi\ Lovato\ \(1\).mp3',
                image: './img/heart\ attack.jpg',
            },
            {
                name : 'Tháng 9 Của Anh',
                singer : 'Khói',
                path : './music/Thang9CuaAnh-Khoi-5663805.mp3',
                image: './img/thang\ 9\ cua\ anh.jpg',
            },
            {
                name : 'Cô Gái Bàn Bên',
                singer : 'Đen Vâu - Link Lee',
                path : './music/Co\ Gai\ Ban\ Ben\ -\ Den_\ Lynk\ Lee.mp3' ,
                image: './img/co\ gai\ ban\ ben.jpg',
            }
        ],
            render: function(){
                const htmls = this.song.map (song => {
                    return`
                    <div class="song">
                        <div class="thumb"
                        style="background-image: url('${song.img}')">
                        </div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>    
                    </div>
                    `
                })
                $('.playlist').innerHTML = htmls.join('')
            },
            handleEvents: function(){
                const cd = $('.cd')
                const cdWidth = cd.offsetWidth
                document.onscroll = function(){
                    const scrollTop = window.scrollY || document.documentElement.scrollTop
                    const newCdWidth = cdWidth - scrollTop
                    cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
                    cd.style.opacity = newCdWidth /cdWidth
                }
            },
            start:function(){
                this.handleEvents()

                this.render()
        }
    }
        app.start()