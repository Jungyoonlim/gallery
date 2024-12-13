import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

const vitalsCallback = (metrics: any) => {

}

export const measureWebVitals = () => {
    getCLS(vitalsCallback)
    getFID(vitalsCallback)
    getFCP(vitalsCallback)
    getLCP(vitalsCallback)
    getTTFB(vitalsCallback)
}

export const measurePageLoadTime = () => {
    if (performance) {
        window.addEventListener('load', () => {
            const timing = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
            console.log()
        })
    }
}