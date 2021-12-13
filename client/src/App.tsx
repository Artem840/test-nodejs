import { FC, SyntheticEvent, useEffect, useState } from "react";
import {
  FacebookShareButton,
  OKShareButton,
  TwitterShareButton,
  VKShareButton,
  FacebookIcon,
  OKIcon,
  TwitterIcon,
  VKIcon
} from "react-share";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { saveUser, selectSavingUser } from "./redux/reducers/userSlice";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #cd718e;
  
  h1 {
    font-size: 48px;
    text-align: center;
    margin-bottom: 32px;
  }

  h2 {
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 12px;
  }

  ol {
    counter-reset: my-counter;
  }

  li {
    counter-increment: my-counter;
    position: relative;

    &::before {
      content: counter(my-counter) ".";
      position: absolute;
      left: -70px;
      top: -20px;
      font-size: 60px;
    }

    &.check::before {
      content: '';
      width: 20px;
      height: 20px;
      left: -34px;
      top: 0;
      background-image: url("check.png");
      background-repeat: no-repeat;
      background-size: cover;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  input {
    font-size: 18px;
    width: 100%;
    padding: 12px 32px;
    border: none;
    border-radius: 30px;
    margin-bottom: 28px;
  }

  button {
    padding: 12px 32px;
    font-size: 32px;
    background-color: #fff;
    color: #7f4156;
    border-radius: 40px;
    transition: .3s ease;

    &:hover:not(:disabled) {
      background-color: #7f4156;
      color: #fff;
    }

    &:disabled {
      cursor: default;
      color: #fff;
      background-color: transparent;
      border: 2px solid #fff;
    }
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  padding: 0 15px;
`

const ShareButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const App: FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectSavingUser);
  useEffect(() => {
    if (!user) {
      dispatch(saveUser({}))
    }
  }, [dispatch, user])
  const [email, setEmail] = useState<string>(user?.email ? user.email : '')


  const shareUrl = 'http://github.com'
  const title = 'GitHub'

  const handleShareClose = () => {
    const newUser = {...user, shared: true}
    dispatch(saveUser(newUser))
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const newUser = {...user, email}
    dispatch(saveUser(newUser))
  }

  return (
    <Section>
      <Container>
        <h1>Чтобы выиграть путешествие</h1>

        <ol>
          <li className={user?.shared ? "check" : ""}>
            <h2>Поделись с друзьями:</h2>

            <ShareButtonsGroup>
              <VKShareButton url={shareUrl} onShareWindowClose={handleShareClose} disabled={user?.shared}>
                <VKIcon round />
              </VKShareButton>

              <FacebookShareButton url={shareUrl} quote={title} onShareWindowClose={handleShareClose} disabled={user?.shared}>
                <FacebookIcon round />
              </FacebookShareButton>

              <OKShareButton url={shareUrl} onShareWindowClose={handleShareClose} disabled={user?.shared}>
                <OKIcon round />
              </OKShareButton>

              <TwitterShareButton url={shareUrl} onShareWindowClose={handleShareClose} disabled={user?.shared}>
                <TwitterIcon round />
              </TwitterShareButton>
            </ShareButtonsGroup>
          </li>

          <li className={user?.email ? "check" : ""}>
            <h2>Оставь почту:</h2>

            <form onSubmit={handleSubmit}>
              <input disabled={Boolean(user?.email)} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button disabled={Boolean(user?.email) || !email} type="submit">Отправить</button>
            </form>
          </li>
        </ol>
      </Container>
    </Section>
  );
}

export default App;
