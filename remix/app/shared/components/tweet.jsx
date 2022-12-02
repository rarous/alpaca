import Avatar from "~/shared/components/avatar"

const Tweet = (t) => {
    if(t.reblog !== null) {
        return <div className="reblog">
            <div className="reblogNotice">{t.account.display_name || "@" + t.account.username} reblogged</div>
            {Tweet(t.reblog)}
        </div>
    } else {
        return <li key={t.id} className="tweet flex flex-row w-full">
            <div className="gutter">            
            <div className="authorAvatar">
                <Avatar user={t.account} /> 
            </div>
            </div>
            <div className="tweetBody nextToAvatar grow">
                <div className="author">
                    <span className="displayName">{t.account.display_name}</span>
                    <span className="username">@{t.account.acct}</span>
                </div>
                <div className="status" dangerouslySetInnerHTML={{__html: t.content}} />
                <div className="reactions flex flex-row place-content-between w-full">
                    <div className="replies">{t.replies_count ? t.replies_count : ''}</div>
                    <div className="reblogs">{t.reblogs_count ? t.reblogs_count : ''}</div>
                    <div className="favorites">{t.favourites_count ? t.favourites_count : ''}</div>
                    <div className="share"><span>Share</span></div>
                </div>
            </div>
        </li>
    }
  }

export { Tweet }
  