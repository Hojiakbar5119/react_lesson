import React, { Component } from "react";
import { Category, Wrapper,Image,Input,SearchIcons, MicIcons} from "../style";
import burger from '../assets/hamburger.svg'
import Logo from '../assets/logo/Youtube-Logo.svg'
import search from '../assets/search.svg'
import mic from '../assets/mic.svg'
import create from '../assets/create.svg'
import apps from '../assets/apps.svg'
import notifications from '../assets/notifications.svg'
import avatar from '../assets/img/User-Avatar-1.png'

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <Category>
          <Image src={burger} alt="" />
          &nbsp;
          <Image src={Logo} alt="" left />
        </Category>
        <Category>
          <Input placeholder="Search"/>
          <SearchIcons>
            <Image src={search} />
          </SearchIcons>
          <MicIcons>
            <Image src={mic} />
          </MicIcons>
        </Category>
        <Category gaps>
          <Image src={create} lgaps />
          <Image src={apps} lgaps />
          <Image src={notifications} lgaps/>
          <Image src={avatar} avatars lgaps/>
        </Category>
      </Wrapper>
    );
  }
}
  