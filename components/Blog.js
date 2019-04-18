import { h } from 'preact';
import render from 'preact-render-to-string';
import ArrowRight from 'react-icons/lib/fa/long-arrow-right'

const Blog = () => (
	<div className="section">
    <div className="shell">
      <div className="section_head">
        <h2>Latest Blog</h2>
        <p>Quisque non erat mi. Etiam congue et augue sed tempus. Aenean sed ipsum luctus, scelerisque ipsum nec, iaculis justo. Sed at vestibulum purus, sit amet viverra diam nulla ac nisi rhoncus.</p>
      </div>
      <div className="section_body">
        <div className="posts">
					<div className="splitter50">
	          <article className="post spc">
	            <a className="post_image" href="#">
	              <img src="../assets/blog-1.jpg" alt="" />
	            </a>
	            <div className="post_content">
	              <h2 className="post_title">
	                <a href="#">My Most Memorable Moment as a Product Designer</a>
	              </h2>
	              <div className="post_meta">
	                <ul>
	                  <li>By <a href="#">Trendy Theme</a></li>
	                  <li>In <a href="#">Technology</a></li>
	                  <li>At <a href="#">Jan 15, 2019</a></li>
	                </ul>
	              </div>
	              <div className="entry_content">
	                <p>Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem.</p>
	                <a className="readmore" href="#">Read Full Post <ArrowRight size={14} color="#999" /></a>
	              </div>
	            </div>
						</article>
					</div>
					<div className="splitter50">
						<article className="post">
							<a className="post_image" href="#">
								<img src="../assets/blog-2.jpg" alt="" />
							</a>
							<div className="post_content">
								<h2 className="post_title">
									<a href="#">Ideas That Moved Us in 2015</a>
								</h2>
								<div className="post_meta">
									<ul>
										<li>By <a href="#">Admin</a></li>
										<li>In <a href="#">Technology</a></li>
										<li>At <a href="#">Jan 15, 2019</a></li>
									</ul>
								</div>
								<div className="entry_content">
									<p>Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem.</p>
									<a className="readmore" href="#">Read Full Post <ArrowRight size={14} color="#999" /></a>
								</div>
							</div>
						</article>
						<article className="post">
							<a className="post_image" href="#">
								<img src="../assets/blog-3.jpg" alt="" />
							</a>
							<div className="post_content">
								<h2 className="post_title">
									<a href="#">Ideas That Moved Us in 2015</a>
								</h2>
								<div className="post_meta">
									<ul>
										<li>By <a href="#">Admin</a></li>
										<li>In <a href="#">Technology</a></li>
										<li>At <a href="#">Jan 15, 2019</a></li>
									</ul>
								</div>
								<div className="entry_content">
									<p>Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem.</p>
									<a className="readmore" href="#">Read Full Post <ArrowRight size={14} color="#999" /></a>
								</div>
							</div>
						</article>
					</div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
