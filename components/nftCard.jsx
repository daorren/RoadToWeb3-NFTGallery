export const NFTCard = ({ nft }) => {
  return (
      <div className="w-1/4 flex flex-col ">
      <div className="rounded-md">
          <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
      </div>
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
          <div className="">
              {/* <h2 className="text-xl text-gray-800">{nft.title}</h2> */}
              <p className="text-gray-600">Id: {nft.id.tokenId.slice(-5)}</p>
              <p className="text-gray-600" >
                {nft.contract.address.slice(0, 4)}...{nft.contract.address.slice(-4)}
                <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm"} onClick={
                  async () => {
                    await navigator.clipboard.writeText(nft.contract.address);
                  }
                }>Copy</button>
              </p>
          </div>

          <div className="flex-grow mt-2">
              <p className="text-gray-600">{nft.description}</p>
          </div>
      </div>

  </div>
  )
}
