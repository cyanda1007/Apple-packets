function ApplePackets(){
    let appleCost = 0;
    let ApplePacket = 0;
    let TotalCost = 0;


    function costPricePerApple(){
        return appleCost

    }

    function costPricePerPackets(){
        return ApplePacket

    }

    function numberOfPackets(){

    }
    
    function  packetsPrice(){

    }

    function setAppleCost(cost){
        appleCost = cost
    }

    function setPacketsCost(price){
        ApplePacket = price
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