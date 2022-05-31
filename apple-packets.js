function ApplePackets(){
    let appleCost = 0;
    let ApplePacket = 0;
    let TotalCost = 0;


    function costPricePerApple(profit, boxCost,numberOfAppleInABox){
        let percent = boxCost * (profit/100)
        let price = (boxCost + percent) / numberOfAppleInABox
        return price;

    }

    function costPricePerPackets(boxCost,numberOfAppleInABox){
        let price = (boxCost/numberOfAppleInABox)
        return price;

    }

    function numberOfPackets(){

    }
    
    function  packetsPrice(){
        

    }

    function setAppleCost(cost){
        appleCost = cost
    }

    function setPacketsCost(price){
        ApplePacket
    }

    function getTotalCost(){
        return TotalCost
    }

    return{
        costPricePerApple,
        costPricePerPackets,
        numberOfPackets,
        packetsPrice,
        setAppleCost,
        setPacketsCost,
        getTotalCost,
    }
}