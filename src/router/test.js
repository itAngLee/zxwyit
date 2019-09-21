import MackTestPaper from '@/views/test/MackTestPaper.vue'
import TestPaperManage from '@/views/test/TestPaperManage.vue'
import TestResult from '@/views/test/TestResult.vue'
import TestSetter from '@/views/test/TestSetter.vue'
import ViewTestPaper from '@/views/test/ViewTestPaper.vue'

export default (
    [
        {
            path: 'MackTestPaper',
            name: 'MackTestPaper',
            component: MackTestPaper,
        },
        {
            path: 'TestPaperManage',
            name: 'TestPaperManage',
            component: TestPaperManage,
        },
        {
            path: 'TestSetter',
            name: 'TestSetter',
            component: TestSetter,
        },
        {
            path: 'ViewTestPaper',
            name: 'ViewTestPaper',
            component: ViewTestPaper
        },
        {
            path: 'TestResult',
            name: 'TestResult',
            component: TestResult
        }
]
)