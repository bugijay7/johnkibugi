import React, { useState } from 'react';
import './blog.css';

import art1 from '../../assets/art1.jpg';
import art2 from '../../assets/art2.jpg';
import art3 from '../../assets/art3.jpg';
import art4 from '../../assets/art4.jpg';
import art5 from '../../assets/art5.jpg';
import art6 from '../../assets/art6.jpg';
import art7 from '../../assets/art7.jpg';
import art8 from '../../assets/art8.jpg';

const BlogData = [
    {
        id: 1,
        title: "How to 'Really' Know You're in Love",
        excerpt: 'Understanding the true signs of being in love goes beyond fleeting emotions, delving into deeper connections and mutual understanding.',
        date: 'June 24, 2024',
        author: 'Kibugi Maina',
        image: art1,
        tags: ['Love', 'Relationships'],
        content: 'This article explores the profound aspects of being in love, highlighting key signs and emotions that indicate a genuine connection.'
    },
    {
        id: 2,
        title: "The Art of Disappearing",
        excerpt: 'Mastering the skill of disappearing gracefully involves more than just physical absence; its about emotional detachment and the allure of mystery.',
        date: 'June 24, 2024',
        author: 'Kibugi Maina',
        image: art2,
        tags: ['Self-discovery', 'Mystery'],
        content: 'Explore the intricacies of disappearing from situations and relationships while maintaining dignity and a sense of self.'
    },
    {
        id: 3,
        title: "We Fell Away",
        excerpt: 'Navigating the complexities of drifting apart in relationships requires introspection, communication, and acceptance of change.',
        date: 'June 24, 2024',
        author: 'Kibugi Maina',
        image: art3,
        tags: ['Relationships', 'Growth'],
        content: 'Delve into the reasons behind falling out of sync with someone, and discover ways to navigate emotional distance and personal growth.'
    },
    {
        id: 4,
        title: "Wishing and the Power of Dreams",
        excerpt: 'Wishing and dreaming are two of the most intrinsic human experiences, shaping our aspirations and driving us towards a brighter future.',
        date: 'June 24, 2024',
        author: 'Kibugi Maina',
        image: art4,
        tags: ['Aspiration', 'Motivation'],
        content: 'Explore how wishes and dreams fuel personal growth and societal progress, harnessing their power to envision and achieve a better future.'
    },
    {
        id: 5,
        title: "Don't Describe Female Characters as Beautiful",
        excerpt: 'Challenging the narrative of characterizing female personalities solely by physical appearance, emphasizing depth and complexity instead.',
        date: 'June 24, 2024',
        author: 'Kibugi Maina',
        image: art5,
        tags: ['Gender', 'Representation'],
        content: 'This article discusses the importance of portraying female characters in literature and media beyond superficial beauty, focusing on their qualities and achievements.'
    },
    {
        id: 6,
        title: "Laziness Does Exist",
        excerpt: 'Examining the concept of laziness through a lens of mental health, societal expectations, and the need for balanced self-care.',
        date: 'June 24, 2024',
        author: 'Kibugi Maina',
        image: art6,
        tags: ['Productivity', 'Self-care'],
        content: 'Discover the nuances of laziness as a misunderstood phenomenon, exploring its roots and practical strategies for overcoming procrastination.'
    },
    {
        id: 7,
        title: "Curiosity Creates Connection",
        excerpt: 'Exploring how curiosity fosters meaningful connections by sparking conversations, sharing experiences, and embracing diversity.',
        date: 'June 24, 2024',
        author: 'Kibugi Maina',
        image: art7,
        tags: ['Curiosity', 'Connection'],
        content: 'Delve into the role of curiosity in building relationships and communities, highlighting its impact on personal growth and understanding.'
    },
    {
        id: 8,
        title: "Dopamine Detox Challenge",
        excerpt: 'Understanding the concept of dopamine detox and embarking on a journey to reset focus, productivity, and mental well-being.',
        date: 'June 24, 2024',
        author: 'Kibugi Maina',
        image: art8,
        tags: ['Productivity', 'Mental Health'],
        content: 'Join the dopamine detox challenge to break free from distractions, reevaluate goals, and cultivate a healthier relationship with technology.'
    }
];

function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="blog-list">
    {BlogData.map(post => (
        <div className="post" key={post.id} onClick={() => setSelectedPost(post)}>
            <img src={post.image} alt={post.title} className="post-thumbnail" />
            <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <p className="post-meta">
                    <span className="post-date">{post.date}</span> |
                    <span className="post-author">{post.author}</span>
                </p>
            </div>
        </div>
    ))}
</div>

    )
}

export default Blog;
