import { FC, useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { saveUser, selectSavingUser } from "./redux/reducers/userSlice";

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

  const handleSubmit = () => {
    const newUser = {...user, email}
    dispatch(saveUser(newUser))
  }

  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={title} onShareWindowClose={handleShareClose} disabled={user?.shared}>
        <FacebookIcon round />
      </FacebookShareButton>

      <OKShareButton url={shareUrl} onShareWindowClose={handleShareClose} disabled={user?.shared}>
        <OKIcon round />
      </OKShareButton>

      <TwitterShareButton url={shareUrl} onShareWindowClose={handleShareClose} disabled={user?.shared}>
        <TwitterIcon round />
      </TwitterShareButton>

      <VKShareButton url={shareUrl} onShareWindowClose={handleShareClose} disabled={user?.shared}>
        <VKIcon round />
      </VKShareButton>

      <form>
        <input disabled={Boolean(user?.email)} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button disabled={Boolean(user?.email)} onClick={handleSubmit}>send</button>
      </form>
    </div>
  );
}

export default App;
