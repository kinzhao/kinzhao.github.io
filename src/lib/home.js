import { SocialList } from './Social/socialList';

export function Component() {
    return `
        <div class="home">
            <div class="introduction">
                <h1>Hello, I'm Kin.</h1>
                <p>I'm a Senior Software Engineer at <a class="jpmc" href="https://www.chase.com/">JP Morgan Chase</a>.</p>
                <p>Interested in Web, Mobile Development, Machine Learning, Artificial Intelligence and learning new technologies.</p>
                <div class="social-media">
                    ${SocialList.map(item => `<a href="${item.link}"><span><i class="fa fa-${item.icon} fa-2x" aria-hidden="true"></i></span></a>`).join(' ')}
                </div>
            </div>
        </div>
    `;
}
