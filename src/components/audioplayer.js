import React from "react"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import styled from "styled-components"
// import BobMarley from "../../content/music/jamming.m4a"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledAudioPlayer = styled.div`
  .rhap_container,
  .rhap_container *:focus {
    outline: none;
  }
  .rhap_container {
    background-color: rgba(0, 0, 0, 0);
  }
`

const Player = () => {
  return (
    <StyledSection>
      <AudioPlayer
        src="https://incompetech.com/music/royalty-free/mp3-royaltyfree/Local%20Forecast%20-%20Elevator.mp3"
        // src={BobMarley}
        onPlay={e => console.log("onPlay")}
        layout="horizontal-reverse"
        customAdditionalControls={[]}
        showJumpControls={false}
      />
    </StyledSection>
  )
}

export default Player
