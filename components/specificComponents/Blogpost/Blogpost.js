import React, { Component } from "react";
import css from "./Blogpost.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Blogpost extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>
				<main>
					<Hero blok={this.props.blok} contentTypeTag="blogpost" />
					<div className={css["location__main-content"]}>
						<div id="location__short-description" key="location__short-description" className={css["location__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
					</div>
					{this.props.blok.images && this.props.blok.images.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					))}
				</main>
			</div>
        );
    }
}