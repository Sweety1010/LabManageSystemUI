import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import("@/views/FaceDetect.vue")
    },
    {
        path: '/faceCapture',
        component: () =>import("@/views/FaceDetect.vue")
    },
    {
        path: '/faceCompare',
        component: () => import("@/views/FaceCompare.vue")
    },
    {
        path: '/faceRecognition',
        component: () => import("@/views/FaceRecognition.vue")
    },
    {
        path: '/faceStream',
        component: () =>import("@/views/FaceStream.vue")
    },
    {
        path: '/studentInfoEdit',
        component: () =>import("@/views/StudentInfoEdit.vue") 
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;
