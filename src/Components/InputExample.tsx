import { Button, Drawer, Group, Input, TextInput, Transition } from "@mantine/core";
import { GitHubLogoIcon, NotionLogoIcon } from "@modulz/radix-icons";

import { useState } from "react";
  
  function InputExample() {

    
    return (
         <div>
             <TextInput 
             icon={<GitHubLogoIcon />}
             rightSection={<NotionLogoIcon />} 
             label='this is the best placeholder'
             required
             />
         </div>
    );
  }
  
  export default InputExample;