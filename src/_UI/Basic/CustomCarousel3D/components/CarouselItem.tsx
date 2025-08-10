import { FC } from "react"
import { MatchWidths } from "@/_hooks/useWindows"

export interface CarouselItemI {
    item: {
        owner: string
        occupation: string
        comment: string
        matchesWidth: MatchWidths
    }
}

const TestimonialItem: FC<CarouselItemI> = ({ item }) => (
    <article className="custom-carousel-3d-item">
        <div className="custom-carousel-3d-small-quote-container">
            <svg className="custom-carousel-3d-small-quote" viewBox="0 0 171 272" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.58144 4H165.44C165.44 12.5501 167.043 75.6111 167.043 145.619C167.043 224.178 102.379 265.862 48.9377 268H4.58144C4.58144 250.097 3.27016 198.488 4.58144 198.526C64.1685 200.279 76.7271 168.599 76.7271 145.619H4.58144V4Z"
                    fill="#1B014B"
                    stroke="#02B892"
                    strokeWidth="7"
                />
            </svg>
            <div className="custom-carousel-3d-small-info">
                <span className="custom-carousel-3d-owner">{item.owner}</span>
                <span className="custom-carousel-3d-occupation">{item.occupation}</span>
            </div>
        </div>
        <div className="custom-carousel-3d-large-quote-container">
            <svg className="custom-carousel-3d-large-quote" width="305" height="482" viewBox="0 0 305 482" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M303.91 0H2.99927C2.99927 15.6104 -0.000579902 130.745 0 258.563C0.0006509 401.991 120.964 478.096 220.935 482H303.91C303.91 449.313 306.363 355.088 303.91 355.158C192.443 358.358 168.95 300.517 168.95 258.563H303.91V0Z" fill="#16A07F" />
            </svg>
            <div className="custom-carousel-3d-info">
                <p className="custom-carousel-3d-comment">&quot{item.comment}&quot</p>
            </div>
        </div>
    </article>
)

export default TestimonialItem
