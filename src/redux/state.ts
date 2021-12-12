export type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogType = {
    id: number
    avatarUrl: string
    name: string
}

type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SidebarType = {
    friends: Array<DialogType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello. My name Ivan.', likesCount: 13},
            {id: 2, message: 'Goodbye', likesCount: 9},
            {id: 3, message: 'heeey', likesCount: 7}
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                avatarUrl: 'https://rlab.me/wp-content/uploads/2017/09/sozdat-avatar-dlya-youtube-sharg.png',
                name: 'Ivan'
            },
            {
                id: 2,
                avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIMmE0bLUSDD7LII20c-b06qmFH_ZWUqUQA&usqp=CAU',
                name: 'Evgeniy'
            },
            {
                id: 3,
                avatarUrl: 'https://image.freepik.com/free-vector/man-avatar-portrait-of-a-man-minimalist-flat-illustration_186332-435.jpg',
                name: 'Yaroslav'
            },
            {
                id: 4,
                avatarUrl: 'https://cdn.w600.comps.canstockphoto.ru/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BB%D0%B8%D0%BF%D0%B0%D1%80%D1%82_csp41056957.jpg',
                name: 'Alexey'
            },
            {
                id: 5,
                avatarUrl: 'https://w1.pngwing.com/pngs/664/825/png-transparent-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png',
                name: 'Anastasiya'
            }
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'I learn JS and React'},
            {id: 3, message: 'i have good computer'},
            {id: 4, message: 'bla bla'},
            {id: 5, message: 'ho ho ho'}
        ]
    },
    sidebar: {
        friends: [
            {
                id: 1,
                avatarUrl: 'https://rlab.me/wp-content/uploads/2017/09/sozdat-avatar-dlya-youtube-sharg.png',
                name: 'Ivan'
            },
            {
                id: 2,
                avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIMmE0bLUSDD7LII20c-b06qmFH_ZWUqUQA&usqp=CAU',
                name: 'Evgeniy'
            },
            {
                id: 3,
                avatarUrl: 'https://image.freepik.com/free-vector/man-avatar-portrait-of-a-man-minimalist-flat-illustration_186332-435.jpg',
                name: 'Yaroslav'
            }
        ]
    }
}