import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const posts = [
		{
			id: 1,
			title:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio?,',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quod, voluptatum modi soluta illo distinctio dicta itaque alias.Eos veniam quis adipisci officia aperiam libero optio, voluptate enim ab labore alias.,',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGF6zXSTLTsEzW17IYn6jKKl3nLcRRD8snw&usqp=CAU',
		},
		{
			id: 2,
			title:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio?,',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quod, voluptatum modi soluta illo distinctio dicta itaque alias.Eos veniam quis adipisci officia aperiam libero optio, voluptate enim ab labore alias.,',
			img: 'https://america.cgtn.com/wp-content/uploads/2018/06/AP_18163043466325.jpg',
		},
		{
			id: 3,
			title:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio?,',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quod, voluptatum modi soluta illo distinctio dicta itaque alias.Eos veniam quis adipisci officia aperiam libero optio, voluptate enim ab labore alias.,',
			img: 'https://www.acenet.edu/PublishingImages/Interior-Page-Heroes/2018ACE-1045.JPG?RenditionID=10',
		},
		{
			id: 4,
			title:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio?,',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quod, voluptatum modi soluta illo distinctio dicta itaque alias.Eos veniam quis adipisci officia aperiam libero optio, voluptate enim ab labore alias.,',
			img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80',
		},
		{
			id: 5,
			title:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio?,',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quod, voluptatum modi soluta illo distinctio dicta itaque alias.Eos veniam quis adipisci officia aperiam libero optio, voluptate enim ab labore alias.,',
			img: 'https://media.premiumtimesng.com/wp-content/files/2022/08/FbKKvUZUYAA9dFy-e1661603780357.jpg',
		},
		{
			id: 6,
			title:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio?,',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quod, voluptatum modi soluta illo distinctio dicta itaque alias.Eos veniam quis adipisci officia aperiam libero optio, voluptate enim ab labore alias.,',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEKuJtYeypzLSDnS6DJ3jo4EFDlpJFU9ppw&usqp=CAU',
		},
	];

	return (
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div className="post" key={post.id}>
						<div className="img">
							<img src={post.img} alt="" />
						</div>
						<div className="content">
							<Link className="link" to={`/post/${post.id}`}>
								<h2>{post.title}</h2>
							</Link>
							<p>{post.desc}</p>
							<button>Read more...</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
