function distanceFromHqInBlocks(origin) {
    return Math.abs(origin - 42)
}

function distanceFromHqInFeet(origin) {
    return distanceFromHqInBlocks(origin) * 264
}

function distanceTravelledInFeet(origin, destination) {
    return Math.abs(origin - destination) * 264
}

function calculatesFarePrice(origin, destination) {
    const distance = distanceTravelledInFeet(origin, destination)
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}