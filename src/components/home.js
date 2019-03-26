
'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        console.log('Comp was mounted')
    }

    render() {
        
            <div class="colorlib-about">
				<div class="colorlib-narrow-content">
					<div class="row">

						<div class="col-md-6">
							<div class="about-img animate-box" data-animate-effect="fadeInLeft" style="background-image: url(assets/images/img_bg_2.jpg);">
							</div>
						</div>

						<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div class="about-desc">
								<span class="heading-meta">Welcome</span>
								<h2 class="colorlib-heading">Who we are</h2>
								<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
							</div>
							
                            <div class="row padding">

                            
								<div class="col-md-4 no-gutters animate-box" data-animate-effect="fadeInLeft">
									<a href="#" class="steps active">
										<p class="icon"><span><i class="icon-check"></i></span></p>
										<h3>We are <br>pasionate</h3>
									</a>
								</div>


								<div class="col-md-4 no-gutters animate-box" data-animate-effect="fadeInLeft">
									<a href="#" class="steps">
										<p class="icon"><span><i class="icon-check"></i></span></p>
										<h3>Honest <br>Dependable</h3>
									</a>
								</div>


								<div class="col-md-4 no-gutters animate-box" data-animate-effect="fadeInLeft">
									<a href="#" class="steps">
										<p class="icon"><span><i class="icon-check"></i></span></p>
										<h3>Always <br>Improving</h3>
									</a>
								</div>


							</div>
					    </div>
                    </div>
				</div>
			</div>

    }

}
